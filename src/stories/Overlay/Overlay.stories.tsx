import React from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Overlay, Text } from '@paper/components';

const buildOverlay = () => (
  <Overlay content={<Text>Overlay text</Text>} open={true}>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <br />
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
    <Text>Random content to be obstructed</Text>
  </Overlay>
);

const figmaFile = figmaDecorator({
  url: 'https://www.figma.com/file/L5UGvwtakBVBVdkDkED7s9/Paper-Starter-kit?node-id=174%3A2',
});

storiesOf('Overlay', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add('Overlay', buildOverlay);
