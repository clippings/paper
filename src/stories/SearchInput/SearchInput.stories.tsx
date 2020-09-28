import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import { SearchInput, SUBMIT_TYPE } from '@paper';

import docs from './description.md';
import {jsxDecorator} from "storybook-addon-jsx";

const searchInput = () => {
  const placeholder = text('Placeholder', 'Search ...');
  const debounceRate = number('Debounce rate', 300);
  const submitType = select('Submit types', SUBMIT_TYPE, SUBMIT_TYPE.ENTER);
  const onChange = value => {
    alert(value);
  };

  return (
    <SearchInput
      placeholder={placeholder}
      onChange={onChange}
      debounceRate={debounceRate}
      submitOn={submitType}
    />
  );
};

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/2wb8Kz7wTsJmSiPMyRy8Tc/Build-%E2%80%94%C2%A0Materials-library?node-id=505%3A11649',
});

storiesOf('Inputs', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(figmaFile)
  .add('Search input', searchInput, { notes: { markdown: docs } });

