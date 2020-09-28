import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import figmaDecorator from 'storybook-addon-figma';
import {
  Icon,
  PopoverBlock,
  ICONS_SIZE,
  ICON,
  Text,
  ICONS_COLOR,
  TEXT_TYPE,
  Heading,
  HEADING_TYPE,
} from '@paper';

const buildPopoverBlock = () => (
  <PopoverBlock>
    <Icon
      size={ICONS_SIZE.LARGER}
      icon={ICON.SEARCH}
      color={ICONS_COLOR.DARK}
      className="p-icon__animated"
    />
    <Heading type={HEADING_TYPE.SMALL} className="popover-heading">
      From Clippings
    </Heading>
    <Text type={TEXT_TYPE.SMALL} className="graphite-60 text-align-center">
      Add a product from the Clippings catalogue
    </Text>
  </PopoverBlock>
);

storiesOf('/Popover', module)
  .addDecorator(jsxDecorator)
  .addDecorator(
    figmaDecorator({
      url:
        'https://www.figma.com/file/UyshuOHhqRsd7HVOrGKOLf/Build-%E2%80%94-Add-popover?node-id=1%3A99',
    })
  )
  .add('Block', buildPopoverBlock);
