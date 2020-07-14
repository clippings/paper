import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Accordion } from '@src';

const items = [
  {
    id: 1,
    title: 'Item title',
    body: 'Item body',
  },
  {
    id: 2,
    title: 'Item title',
    body: 'Item body',
  },
  {
    id: 3,
    title: 'Item title',
    body: 'Item body',
  },
  {
    id: 4,
    title: 'Item title',
    body: 'Item body',
  },
];
const buildAccordion = () => (
  <Accordion>
    {items.map(item => (
      <Accordion.Item key={item.id} onOpen={() => {}} eventKey={item}>
        <Accordion.Item.Title>{item.title + item.id}</Accordion.Item.Title>
        <Accordion.Item.Body>{item.body + item.id}</Accordion.Item.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

storiesOf('Accordion', module).add('Unspecified badge', buildAccordion).addDecorator(jsxDecorator);
