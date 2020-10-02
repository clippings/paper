import React from 'react';
import { storiesOf } from '@storybook/react';
import { BADGE_SIZE, BADGE_TYPE, TEXT_TYPE } from '@paper/enums';
import { Badge, Text } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildBadge = (type: BADGE_TYPE) => () => <Badge type={type} />;
const buildBadgeWithText = (type: BADGE_TYPE, text: string) => () => (
  <Badge type={type} size={BADGE_SIZE.MEDIUM}>
    <Text type={TEXT_TYPE.SMALL} className="white">
      {text}
    </Text>
  </Badge>
);

storiesOf('Badges', module)
  .addDecorator(jsxDecorator)
  .add('Unspecified badge', buildBadge(BADGE_TYPE.UNSPECIFIED))
  .add('Warning badge', buildBadge(BADGE_TYPE.WARNING))
  .add('Success badge', buildBadge(BADGE_TYPE.SUCCESS))
  .add('Single character badge', buildBadgeWithText(BADGE_TYPE.UNSPECIFIED, '1'))
  .add('Multiple character badge', buildBadgeWithText(BADGE_TYPE.UNSPECIFIED, '888'));
