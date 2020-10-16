import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@paper/components';
import { HEADING_TYPE } from '@paper/enums';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildDefaultHeading = () => <Heading>A heading</Heading>;
const buildLargeHeading = () => <Heading type={HEADING_TYPE.LARGE}>A large heading</Heading>;
const buildSmallHeading = () => <Heading type={HEADING_TYPE.SMALL}>A small heading</Heading>;

storiesOf('Headings', module)
  .addDecorator(jsxDecorator)
  .add('Heading Default', buildDefaultHeading)
  .add('Heading Large', buildLargeHeading)
  .add('Heading Small', buildSmallHeading);
