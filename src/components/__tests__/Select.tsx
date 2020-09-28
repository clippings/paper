import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from '../Select/Select';
const onChange = jest.fn();

const options = [
  {
    label: 'Test',
    value: 1,
  },
];

const select = <Select options={options} onChange={onChange} />;

describe('Select component', () => {
  test('matches snapshot', () => {
    const { container } = render(select);
    expect(container).toMatchSnapshot();
  });

  test('onChange is triggered', () => {
    const { getByText } = render(select);
    const option = getByText('Test');

    fireEvent.click(option);

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith(1);
  });
});
