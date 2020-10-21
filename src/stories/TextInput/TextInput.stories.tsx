import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { TextInput } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';
import docs from './description.md';

const ref = React.createRef();

const baseProps = {
  title: 'Label',
  placeholderText: 'Placeholder',
  disabled: false,
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
  .add('Default TextInput', buildTextInput(baseProps), { notes: { markdown: docs } });

storiesOf('Inputs', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .addDecorator(withConsole)
  .add(
    'With Error TextInput',
    buildTextInput({
      ...baseProps,
      error: 'Something went wrong',
    }),
    { notes: { markdown: docs } }
  );
