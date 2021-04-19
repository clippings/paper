import React from 'react';
import { render } from '@testing-library/react';
import { Select } from '../Select/Select';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

const options = [
  {
    label: 'Test',
    value: 1,
  },
];

const select = (
  <Select options={options} label="Test label" data-testid="test-select" onChange={onChange} />
);

describe('Select component', () => {
  test('matches snapshot', () => {
    const { container } = render(select);
    expect(container).toMatchSnapshot();
  });

  test('onChange is triggered', () => {
    const { getByText, getByRole } = render(select);

    userEvent.click(getByRole('button'));
    userEvent.click(getByText('Test'));

    expect(onChange).toBeCalledTimes(1);
  });
});
