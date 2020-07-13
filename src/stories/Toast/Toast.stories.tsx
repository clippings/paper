import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import componentInfo from './componentInfo.md';

import { Toast } from '../../';

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
  .add('Toast', useToast, { notes: { markdown: componentInfo } })
  .addDecorator(jsxDecorator);
