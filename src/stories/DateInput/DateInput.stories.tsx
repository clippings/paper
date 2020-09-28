import React, { useState } from 'react';
import figmaDecorator from 'storybook-addon-figma';
import { storiesOf } from '@storybook/react';
import { DateInput } from '@paper';

import componentInfo from './componentInfo.md';
import { jsxDecorator } from 'storybook-addon-jsx';

const baseProps = {
  title: 'Deadline',
  placeholderText: 'e.g. 18/10/2020',
  disabled: false,
};
const buildDateInput = props => () => {
  const [selected, setSelected] = useState();
  return <DateInput selected={selected} onChange={setSelected} {...props} />;
};

const figmaFile = figmaDecorator({
  url: 'https://www.figma.com/file/9yrktrewqLhb62TIO49Htg/Web-UI-Kit?node-id=142%3A87',
});

storiesOf('Inputs', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add('Default DateInput', buildDateInput(baseProps), { notes: { markdown: componentInfo } });

storiesOf('Inputs', module)
  .addDecorator(jsxDecorator)
  .addDecorator(figmaFile)
  .add(
    'With Error DateInput',
    buildDateInput({
      ...baseProps,
      error: 'One or more products may not be deliverable by this date',
    }),
    { notes: { markdown: componentInfo } }
  );
