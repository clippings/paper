import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import componentInfo from './componentInfo.md';
import { Toast } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';

const useToast = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <div>
      <button onClick={toggle}>Toast!</button>
      <Toast show={show}>
        <button onClick={toggle} role="presentation">
          Hide
        </button>
      </Toast>
    </div>
  );
};

storiesOf('Toast', module)
  .addDecorator(jsxDecorator)
  .add('Toast', useToast, { notes: { markdown: componentInfo } });
