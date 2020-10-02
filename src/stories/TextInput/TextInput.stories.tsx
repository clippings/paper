import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { TextInput } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';
import docs from './description.md';

const baseProps = {
  title: 'Label',
  placeholderText: 'Placeholder',
  disabled: false,
  onChange: () => {
    alert('Detect on change');
  },
};
const buildTextInput = props => () => <TextInput {...props} />;

const figmaFile = figmaDecorator({
  url: 'https://www.figma.com/file/9yrktrewqLhb62TIO49Htg/Web-UI-Kit?node-id=142%3A87',
});

storiesOf('Inputs', module)
  .addDecorator(figmaFile)
  .add('Default TextInput', buildTextInput(baseProps), { notes: { markdown: docs } });

storiesOf('Inputs', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add(
    'With Error TextInput',
    buildTextInput({
      ...baseProps,
      error: 'Something went wrong',
    }),
    { notes: { markdown: docs } }
  );
