import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Heading, HEADING_TYPES } from'../../';

const buildDefaultHeading = () => <Heading type={HEADING_TYPES.DEFAULT}>A heading</Heading>;

storiesOf('Paper/Components/Headings', module)
  .add('Heading Default', buildDefaultHeading)
  .addDecorator(jsxDecorator);
