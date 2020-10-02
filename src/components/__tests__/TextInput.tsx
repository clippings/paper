import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TextInput } from '@paper/components';

const onChange = jest.fn();

describe('TextInput', () => {
  const title = 'Title text';
  const placeholderText = 'Placeholder text';
  const error = 'Error message';

  const textInput = (
    <TextInput onChange={onChange} placeholderText={placeholderText} title={title} error={error} />
  );

  test('TextInput renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(textInput);
    expect(getByText(title)).toBeVisible();
    expect(getByText(error)).toBeVisible();
    expect(getByPlaceholderText(placeholderText)).not.toBeNull();
  });

  test('TextInput onChange is triggered', () => {
    const { container } = render(textInput);
    const input: any = container.querySelector('input');

    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith('test');
  });
});
