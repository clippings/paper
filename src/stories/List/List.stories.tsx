import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { BADGE_TYPE, HEADING_TYPE, LIST_ITEM_SIZE, LIST_SPACING } from '@paper/enums';
import { List, ListItem, StatusLabel, Heading, Badge } from '@paper/components';
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

const buildClickableList = () => (
  <List>
    <ListItem onClick={() => {}}>
      <Heading>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPE.UNSPECIFIED} />A status
      </StatusLabel>
    </ListItem>
    <ListItem onClick={() => {}}>
      <Heading>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPE.SUCCESS} />A successful status
      </StatusLabel>
    </ListItem>
  </List>
);

const buildSmallList = () => (
  <List spacing={LIST_SPACING.SMALL}>
    <ListItem size={LIST_ITEM_SIZE.SMALL}>
      <Heading>An item</Heading>
      <StatusLabel>
        <Badge type={BADGE_TYPE.UNSPECIFIED} />A status
      </StatusLabel>
    </ListItem>
    <ListItem size={LIST_ITEM_SIZE.SMALL}>
      <Heading>An item</Heading>
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
  .add('Pretty list', buildPrettyList)
  .add('Clickable list', buildClickableList)
  .add('Small list', buildSmallList);
