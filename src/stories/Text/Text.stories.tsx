import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Text, TEXT_TYPES } from '../../';

const buildSmallText = () => <Text type={TEXT_TYPES.SMALL}>A text</Text>;

storiesOf('Text', module).add('Text Small', buildSmallText).addDecorator(jsxDecorator);
