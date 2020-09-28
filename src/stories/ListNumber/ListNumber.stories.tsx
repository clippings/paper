import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { ListNumber, ListNumberItem, Text } from '@paper';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildPrettyList = () => (
  <ListNumber>
    <ListNumberItem>
      <Text>1st list item</Text>
      <br />
      <Text type="small">Lorem ipsum</Text>
    </ListNumberItem>
    <ListNumberItem>
      <Text className="">2nd list item</Text>
    </ListNumberItem>
    <ListNumberItem>
      <Text className="">3rd list item</Text>
    </ListNumberItem>
  </ListNumber>
);

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/qRu3vJHh0soPt6ffd7FLyq/Build-%E2%80%94-Passwordless-log-in?node-id=15%3A0',
});

storiesOf('List', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add('Pretty number list', buildPrettyList);
