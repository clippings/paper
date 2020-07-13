import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Badge, BADGE_TYPES, StatusLabel } from '../../';

const buildStatusLabel = () => (
  <StatusLabel>
    <Badge type={BADGE_TYPES.SUCCESS} />
    Success
  </StatusLabel>
);

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/X0J5b9pCAoDLT3zLlSxZD7/Build-%E2%80%94-Add-to-Ready-Quote-from-Board?node-id=38%3A472',
});

storiesOf('Paper/Components', module)
  .add('Status label', buildStatusLabel)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile);
