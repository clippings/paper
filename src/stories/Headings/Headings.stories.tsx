import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@paper/components';
import { HEADING_TYPE } from '@paper/enums';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildDefaultHeading = () => <Heading type={HEADING_TYPE.DEFAULT}>A heading</Heading>;

storiesOf('Headings', module)
  .addDecorator(jsxDecorator)
  .add('Heading Default', buildDefaultHeading);
