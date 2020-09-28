import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { List, ListItem, StatusLabel, Heading, Badge, BADGE_TYPE, HEADING_TYPE } from '@paper';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildPrettyList = () => (
  <List>
    <ListItem>
      <Heading type={HEADING_TYPE.DEFAULT}>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPE.UNSPECIFIED} />A status
      </StatusLabel>
    </ListItem>
    <ListItem>
      <Heading type={HEADING_TYPE.DEFAULT}>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPE.SUCCESS} />A successful status
      </StatusLabel>
    </ListItem>
  </List>
);

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/X0J5b9pCAoDLT3zLlSxZD7/Build-%E2%80%94-Add-to-Ready-Quote-from-Board?node-id=38%3A467',
});

storiesOf('List', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add('Pretty list', buildPrettyList);
