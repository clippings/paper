import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Select } from '@paper';

import docs from './description.md';
import {jsxDecorator} from "storybook-addon-jsx";

const options = [
  {
    label: 'Test',
    value: 'value',
  },
  {
    label: 'Test2',
    value: 'value2',
  },
];

const selectInput = () => {
  const placeholder = text('Placeholder', 'Select a value');
  const onChange = value => {
    alert(value);
  };

  return <Select placeholder={placeholder} onChange={onChange} options={options} />;
};

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/2wb8Kz7wTsJmSiPMyRy8Tc/Build-%E2%80%94%C2%A0Materials-library?node-id=505%3A11649',
});

storiesOf('Inputs', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(figmaFile)
  .add('Select input', selectInput, { notes: { markdown: docs } });
