import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '@paper/components';
import { jsxDecorator } from 'storybook-addon-jsx';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  grid-auto-rows: minmax(100px, auto);
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 8px;
  }
`;

const items = [
  {
    key: 'key-0',
    img: 'https://res.cloudinary.com/clippings/image/upload/v1611495053/placeholders/image-n-a.png',
    description: { primary: 'Item without picture', secondary: '+ £100.00' },
  },
  {
    key: 'key-1',
    selected: true,
    img:
      'https://res.cloudinary.com/clippings/image/upload/w_150,ar_1:1,c_fill,g_auto,e_art:hokusai/v1554271662/A03%20Upholstery/A03_Yellow.jpg',
    description: { primary: 'A03 Yellow', secondary: '+ £100.00' },
  },

  {
    key: 'key-2',
    img:
      'https://res.cloudinary.com/clippings/image/upload/w_150,ar_1:1,c_fill,g_auto,e_art:hokusai/v1554271662/A03%20Upholstery/A03_Light-grey.jpg',
    description: { primary: 'A03 Light-grey', secondary: '+ £100.00' },
  },
  {
    key: 'key-3',
    img:
      'https://res.cloudinary.com/clippings/image/upload/w_150,ar_1:1,c_fill,g_auto,e_art:hokusai/v1554271662/A03%20Upholstery/A03_Light-blue.jpg',
    description: { primary: 'A03 Light-blue', secondary: null },
  },
  {
    key: 'key-4',
    img:
      'https://res.cloudinary.com/clippings/image/upload/w_150,ar_1:1,c_fill,g_auto,e_art:hokusai/v1554271662/A03%20Upholstery/A03_Blue.jpg',
    description: { primary: 'A03 Blue', secondary: null },
  },
  {
    key: 'key-4',
    img:
      'https://res.cloudinary.com/clippings/image/upload/w_150,ar_1:1,c_fill,g_auto,e_art:hokusai/v1554271475/A03%20Upholstery/A03_Dark-grey.jpg',
    description: { primary: 'A03 Dark-grey', secondary: null },
  },
];
const buildItemGrid = () => (
  <div style={{ maxWidth: '500px', padding: '24px', backgroundColor: '#e5e5e5' }}>
    <CardGrid>
      {items.map(item => (
        <Card {...item} selected={item.key === 'key-1'} key={item.key} />
      ))}
    </CardGrid>
  </div>
);

storiesOf('Card', module).addDecorator(jsxDecorator).add('Grid example', buildItemGrid);
