import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Badge, BADGE_TYPES, Text, BADGE_SIZES, TEXT_TYPES } from '../../';

const buildBadge = (type: BADGE_TYPES) => () => <Badge type={type} />;
const buildBadgeWithText = (type: BADGE_TYPES, text: string) => () => (
  <Badge type={type} size={BADGE_SIZES.MEDIUM}>
    <Text type={TEXT_TYPES.SMALL} className="white">
      {text}
    </Text>
  </Badge>
);

storiesOf('Badges', module)
  .add('Unspecified badge', buildBadge(BADGE_TYPES.UNSPECIFIED))
  .add('Warning badge', buildBadge(BADGE_TYPES.WARNING))
  .add('Success badge', buildBadge(BADGE_TYPES.SUCCESS))
  .add('Single character badge', buildBadgeWithText(BADGE_TYPES.UNSPECIFIED, '1'))
  .add('Multiple character badge', buildBadgeWithText(BADGE_TYPES.UNSPECIFIED, '888'))
  .addDecorator(jsxDecorator);
