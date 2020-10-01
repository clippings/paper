import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from '@paper';
import { jsxDecorator } from 'storybook-addon-jsx';

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
  <Accordion defaultOpened={null} disabled={false}>
    {items.map(item => (
      <Accordion.Item key={item.id} onOpen={() => {}} eventKey={item} id={item.id}>
        <Accordion.Item.Title>{item.title + item.id}</Accordion.Item.Title>
        <Accordion.Item.Body>{item.body + item.id}</Accordion.Item.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

storiesOf('Accordion', module).addDecorator(jsxDecorator).add('Default accordion', buildAccordion);
