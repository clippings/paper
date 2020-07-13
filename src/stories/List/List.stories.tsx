import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { List, ListItem, StatusLabel, Heading, Badge, BADGE_TYPES, HEADING_TYPES } from '../../';

const buildPrettyList = () => (
  <List>
    <ListItem>
      <Heading type={HEADING_TYPES.DEFAULT}>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPES.UNSPECIFIED} />A status
      </StatusLabel>
    </ListItem>
    <ListItem>
      <Heading type={HEADING_TYPES.DEFAULT}>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPES.SUCCESS} />A successful status
      </StatusLabel>
    </ListItem>
  </List>
);

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/X0J5b9pCAoDLT3zLlSxZD7/Build-%E2%80%94-Add-to-Ready-Quote-from-Board?node-id=38%3A467',
});

storiesOf('List', module)
  .add('Pretty list', buildPrettyList)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile);
