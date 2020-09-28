import React, { useState } from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { AutocompleteInput } from '@paper';
import docs from './description.md';

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
  {
    label: 'Pacha Lounge Chair',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v2/products/pacha-lounge-chair-fully-upholstered-price-grp-01-gubi-metal-pearl-gold-gubi-pierre-paulin-clippings-11191074.jpg',
  },
  {
    label: 'Hai Lounge Chair & Ottoman',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_white_bg_trim_padded/dpr_1.0,f_auto,w_600/v1520416703/products/hai-chair-ottoman-hem-rudolph-schelling-webermann-clippings-9931321.jpg',
  },
  {
    label: 'Outline Chaise Longue Sofa',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1/products/outline-chaise-longue-fiord-metal-black-left-muuto-anderssen-voll-clippings-11348113.jpg',
  },
  {
    label: 'Co Dining Chair - Seat Upholstered',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1/products/co-dining-chair-seat-upholstered-category-1-dark-stained-oak-menu-norm-architects-els-van-hoorebeeck-clippings-11337387.jpg',
  },
  {
    label: 'BFF Sofa',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1/products/bff-sofa-price-category-1-moooi-marcel-wanders-clippings-11335806.jpg',
  },
  {
    label: 'Option Dining Chair Round Seat Square Backrest',
    image:
      'https://res.cloudinary.com/clippings/image/upload/t_small_square/dpr_1.0,f_auto,w_600/v1557742232/products/option-chair-round-seat-square-backrest-puik-frederik-roij%C3%A9-clippings-11201167.jpg',
  },
];

const AutocompleteInputStory = () => {
  const placeholder = text('Placeholder', 'Search ...');
  const debounceRate = number('Debounce rate', 300);
  const [data, setData] = useState(hits);

  const onSearch = value => {
    setData(hits.filter(v => v.label.includes(value)));
  };

  return (
    <AutocompleteInput
      placeholder={placeholder}
      hits={data}
      debounceRate={debounceRate}
      onSearch={onSearch}
    />
  );
};

const CustomAutocompleteInputStory = () => {
  const placeholder = text('Placeholder', 'Search ...');
  const debounceRate = number('Debounce rate', 300);
  const [data, setData] = useState(hits);

  const onSearch = value => {
    setData(hits.filter(v => v.label.includes(value)));
  };

  return (
    <AutocompleteInput
      placeholder={placeholder}
      hits={data}
      debounceRate={debounceRate}
      onSearch={onSearch}
      onChange={value => console.log(value)}
    >
      {hit => (
        <>
          <img src={hit.image} title={hit.label} alt={hit.label} style={{ height: 30 }} />{' '}
          <span>{hit.label}</span>
        </>
      )}
    </AutocompleteInput>
  );
};

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/2wb8Kz7wTsJmSiPMyRy8Tc/Build-%E2%80%94%C2%A0Materials-library?node-id=505%3A11649',
});

storiesOf('Inputs/Autocomplete', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(figmaFile)
  .add('Autocomplete basic usage', AutocompleteInputStory, { notes: { markdown: docs } })
  .add('Custom autocomplete basic usage', CustomAutocompleteInputStory, {
    notes: { markdown: docs },
  });
