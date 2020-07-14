import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchInput, SUBMIT_TYPES } from '@src';
jest.useFakeTimers();
jest.mock('lodash', () => ({
  debounce: jest.fn().mockImplementation((callback, delay) => {
    let timer: any = null;
    const resetTimer = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = null;
    };
    const wrapped = (...args) => {
      resetTimer();
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
    wrapped.cancel = () => {
      resetTimer();
    };
    return wrapped;
  }),
}));
const onChange = jest.fn();
describe('Search input', () => {
  const searchInput = <SearchInput placeholder="Search ..." onChange={onChange} />;
  test('match snapshot', () => {
    const { container } = render(searchInput);
    expect(container).toMatchSnapshot();
  });
  test('onChange is triggered', () => {
    onChange.mockClear();
    const { container } = render(searchInput);
    const input = container.querySelector('input');
    if (input !== null) {
      fireEvent.keyUp(input, {
        target: {
          value: 'Test',
        },
      });
    }

    jest.runOnlyPendingTimers();
    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith('Test');
  });
  test('onChange is triggered once', () => {
    onChange.mockClear();
    const debouncedInput = (
      <SearchInput placeholder="Search ..." onChange={onChange} debounceRate={500} />
    );
    const { container } = render(debouncedInput);
    const input = container.querySelector('input');
    if (input !== null) {
      fireEvent.keyUp(input, {
        target: {
          value: 'Test',
        },
      });
      fireEvent.keyUp(input, {
        target: {
          value: 'Test Test',
        },
      });
    }
    jest.runOnlyPendingTimers();
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith('Test Test');
  });
  test('onChange is triggered on enter', () => {
    onChange.mockClear();
    const searchOnEnterInput = (
      <SearchInput placeholder="Search ..." onChange={onChange} submitOn={SUBMIT_TYPES.ENTER} />
    );
    const { container } = render(searchOnEnterInput);
    const input = container.querySelector('input');
    if (input !== null) {
      fireEvent.keyUp(input, {
        target: {
          value: 'Test',
        },
      });
      fireEvent.keyUp(input, {
        key: 'Enter',
        code: 'Enter',
      });
    }
    jest.runOnlyPendingTimers();
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith('Test');
  });
});
