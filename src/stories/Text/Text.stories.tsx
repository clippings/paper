import React from 'react';
import { storiesOf } from '@storybook/react';
import { TEXT_TYPE } from '@paper/enums';
import { Text } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildSmallText = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text>A text</Text>
    <Text type={TEXT_TYPE.SMALL}>A small text</Text>
  </div>
);

storiesOf('Text', module).addDecorator(jsxDecorator).add('Text', buildSmallText);
