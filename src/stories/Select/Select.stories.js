import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Select } from'../../';

const docs = require('./description.md');

const options = [
  {
    label: 'Test',
    value: 'value',
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

storiesOf('Paper/Inputs', module)
  .add('Select input', selectInput, { notes: { markdown: docs } })
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(figmaFile);
