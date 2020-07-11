import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ListItem } from'../../';
import figmaDecorator from 'storybook-addon-figma';

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/X0J5b9pCAoDLT3zLlSxZD7/Build-%E2%80%94-Add-to-Ready-Quote-from-Board?node-id=284%3A2096',
});

const buildListItem = () => <ListItem>Content</ListItem>;

storiesOf('Paper/Components/List', module)
  .add('List item', buildListItem)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile);
