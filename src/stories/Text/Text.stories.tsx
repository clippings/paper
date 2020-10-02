import React from 'react';
import { storiesOf } from '@storybook/react';
import { TEXT_TYPE } from '@paper/enums';
import { Text } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildSmallText = () => <Text type={TEXT_TYPE.SMALL}>A text</Text>;

storiesOf('Text', module).addDecorator(jsxDecorator).add('Text Small', buildSmallText);
