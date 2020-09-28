import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, TEXT_TYPE } from '@paper';
import {jsxDecorator} from "storybook-addon-jsx";

const buildSmallText = () => <Text type={TEXT_TYPE.SMALL}>A text</Text>;

storiesOf('Text', module)
  .addDecorator(jsxDecorator)
  .add('Text Small', buildSmallText);
