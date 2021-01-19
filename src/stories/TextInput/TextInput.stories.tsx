import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { TextInput } from '@paper/components';
import docs from './description.md';

const ref = React.createRef();

const baseProps = {
  id: 'text-input',
  title: 'Label',
  placeholderText: 'Placeholder',
  onChange: value => {
    console.log(`Value = ${value}`);
    console.log(ref.current);
  },
};

const buildTextInput = props => () => <TextInput {...props} ref={ref} />;

const figmaFile = figmaDecorator({
  url: 'https://www.figma.com/file/9yrktrewqLhb62TIO49Htg/Web-UI-Kit?node-id=142%3A87',
});

storiesOf('Inputs', module)
  .addDecorator(figmaFile)
  .add('Default TextInput', buildTextInput({ ...baseProps }), { notes: { markdown: docs } })
  .add('Default TextInput disabled', buildTextInput({ ...baseProps, disabled: true }), {
    notes: { markdown: docs },
  })
  .add(
    'Default TextInput with errors',
    buildTextInput({ ...baseProps, error: 'Something went wrong' }),
    { notes: { markdown: docs } }
  );
