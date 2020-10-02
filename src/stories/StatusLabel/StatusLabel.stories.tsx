import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { BADGE_TYPE } from '@paper/enums';
import { Badge, StatusLabel } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';

const buildStatusLabel = () => (
  <StatusLabel>
    <Badge type={BADGE_TYPE.SUCCESS} />
    Success
  </StatusLabel>
);

const figmaFile = figmaDecorator({
  url:
    'https://www.figma.com/file/X0J5b9pCAoDLT3zLlSxZD7/Build-%E2%80%94-Add-to-Ready-Quote-from-Board?node-id=38%3A472',
});

storiesOf('Label', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add('Status label', buildStatusLabel);
