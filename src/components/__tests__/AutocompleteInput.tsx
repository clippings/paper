import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AutocompleteInput } from '../Autocomplete/AutocompleteInput';

const hits = [
  {
    label: 'Blend Bar Stool',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1/products/blend-bar-sool-onyx-oak-stellar-works-nendo-clippings-11440387.jpg',
  },
  {
    label: 'Echoes Lounge Chair',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1597044847/products/echoes-lounge-chair-flexform-christophe-pillet-clippings-11440372.jpg',
  },
  {
    label: 'Curt Modular Sofa',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1/products/curt-modular-sofa-jet-9110-flexible-bench-ambivalenz-malte-grieb-und-joa-herrenknecht-clippings-11422187.png',
  },
];

jest.useFakeTimers();

const onSearch = jest.fn().mockReturnValue(hits);
const onChange = jest.fn();

describe('Autocomplete component', () => {
  const component = (
    <AutocompleteInput
      hits={hits}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Search ..."
    />
  );

  test('matches snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('hits are loaded on focus', () => {
    const { container } = render(component);
    const input: any = container.querySelector('input');

    userEvent.click(input);

    const hitContainer = container.querySelector('.p-f-autocomplete__hits');
    const hitItems = container.querySelectorAll('.p-f-autocomplete__hits__hit');
    expect(hitContainer).not.toBeUndefined();
    expect(hitItems.length).toBe(3);
  });

  test('onChange is triggered', () => {
    const { container } = render(component);
    const input: any = container.querySelector('input');

    userEvent.type(input, 'term');
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith('term');
  });
});
