import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Icon,
  PopoverBlock,
  ICONS_SIZE,
  ICON,
  Text,
  ICONS_COLOR,
  TEXT_TYPE,
  PopoverMenu,
  Heading,
  HEADING_TYPE,
} from '@paper';
import figmaDecorator from 'storybook-addon-figma';
import {jsxDecorator} from "storybook-addon-jsx";

const buildPopoverMenu = () => (
  <PopoverMenu>
    <PopoverBlock>
      <Icon
        className="p-icon__animated"
        size={ICONS_SIZE.LARGER}
        icon={ICON.SEARCH}
        color={ICONS_COLOR.DARK}
      />
      <Heading type={HEADING_TYPE.SMALL} className="popover-heading">
        From Clippings
      </Heading>
      <Text type={TEXT_TYPE.SMALL} className="graphite-60 text-align-center">
        Add a product from the Clippings catalogue
      </Text>
    </PopoverBlock>
    <PopoverBlock>
      <Icon
        className="p-icon__animated"
        size={ICONS_SIZE.LARGER}
        icon={ICON.UPLOAD}
        color={ICONS_COLOR.DARK}
      />
      <Heading type={HEADING_TYPE.SMALL} className="popover-heading">
        From elsewhere
      </Heading>
      <Text type={TEXT_TYPE.SMALL} className="graphite-60 text-align-center">
        Add a product you’ve found elsewhere
      </Text>
    </PopoverBlock>
    <PopoverBlock>
      <Icon
        className="p-icon__animated"
        size={ICONS_SIZE.LARGER}
        icon={ICON.FOLDER}
        color={ICONS_COLOR.DARK}
      />
      <Heading type={HEADING_TYPE.SMALL} className="popover-heading">
        Create a space
      </Heading>
      <Text type={TEXT_TYPE.SMALL} className="graphite-60 text-align-center">
        Organise products into rooms or areas
      </Text>
    </PopoverBlock>
  </PopoverMenu>
);

storiesOf('Popover', module)
  .addDecorator(jsxDecorator)
  .addDecorator(
    figmaDecorator({
      url:
        'https://www.figma.com/file/UyshuOHhqRsd7HVOrGKOLf/Build-%E2%80%94-Add-popover?node-id=1%3A99',
    })
  )
  .add('Menu', buildPopoverMenu);
