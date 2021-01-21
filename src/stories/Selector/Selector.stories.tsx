import React from 'react';
import { storiesOf } from '@storybook/react';
import { Selector, SelectorRow } from '../../components/Selector/styles/Selector';
import { jsxDecorator } from 'storybook-addon-jsx';
import styled, { ThemeProvider } from 'styled-components';
import { SelectorItem } from '@paper/components';
import { AVATAR_SHAPE } from '../../components/Avatar/enums/AvatarShapeEnum';
import { ICON } from '../../components/Icon/enums/IconEnum';
import { IconAvatarStyled } from '../../components/Avatar';

const items = [
  {
    key: 'key-0',
    avatar: null,
    avatarShape: AVATAR_SHAPE.CIRCLE,
    text: 'Item without picture',
    subText: 'Sub tex',
    addition: '8 options',
  },
  {
    key: 'key-1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1519366670/fabrics/f-1288-c0472.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    text: 'Item with good quality img',
    subText: 'Sub tex',
    addition: '9 options',
  },

  {
    key: 'key-2',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1480675752/fabrics/table-top-and-fronts-13-american-walnut-clippings-1793862.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    text: 'Item with low quality img',
    subText: 'Sub tex',
    addition: '9 options',
  },
  {
    key: 'key-3',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1480676106/fabrics/blotter-and-sideboard-cover-leather-premium-77-brown-clippings-8666772.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    text: 'Item without sub text',
    subText: null,
    addition: '5 options',
  },
  {
    key: 'key-4',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1480676084/fabrics/base-52-soft-light-powder-coated-smooth-clippings-8666755.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    text: 'Item without addition text',
    subText: null,
    addition: null,
  },
];

const items2 = [
  {
    key: 'key-5',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/t_square_tiny/dpr_auto,f_auto,w_auto/v9/products/iron-maiden-sofa-a6126-cosme-beige-h-bahia-200-x-90-moroso-diesel-creative-team-clippings-10497301.jpg',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Project',
    subText: null,
    addition: null,
  },

  {
    key: 'key-6',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/t_square_tiny/dpr_auto,f_auto,w_auto/v9/products/iron-maiden-sofa-a6126-cosme-beige-h-bahia-200-x-90-moroso-diesel-creative-team-clippings-10497301.jpg',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Project',
    subText: null,
    addition: ' ',
  },

  {
    key: 'key-6.1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/t_square_tiny/dpr_auto,f_auto,w_auto/v9/products/iron-maiden-sofa-a6126-cosme-beige-h-bahia-200-x-90-moroso-diesel-creative-team-clippings-10497301.jpg',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Project',
    subText: null,
    addition: '3 spaces',
  },
  {
    key: 'key-7',
    avatar: null,
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Space',
    subText: null,
    addition: '',
  },
  {
    key: 'key-7.1.1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1525254144/placeholders/empty_project.png',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Space',
    subText: null,
    addition: '',
  },
  {
    key: 'key-7.1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1525254144/placeholders/empty_project.png',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Space sub spaces',
    subText: null,
    addition: ' ',
  },
  {
    key: 'key-7.2',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1525254144/placeholders/empty_project.png',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    text: 'Space sub spaces',
    subText: null,
    addition: '2 spaces',
  },
];

const VariationSelectorContainer = styled.div`
  max-width: 500px;
  background-color: #fff;
  display: flex;
  padding: 16px;
  margin: -1rem;
  ${SelectorRow} {
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: #f5f5f5;
    ${IconAvatarStyled} {
      background-color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    background-color: #f5f5f5;
    ${SelectorRow} {
      background-color: #fff;

      ${IconAvatarStyled} {
        background-color: #f5f5f5;
      }
    }
`;

const SimpleSelectorContainer = styled.div`
  max-width: 500px;
  background-color: #fff;
  display: flex;
  padding: 16px;
  margin: -1rem;
  ${SelectorRow}:hover {
    background-color: #f5f5f5;
    ${IconAvatarStyled} {
      background-color: #fff;
    }
  }
`;

const buildVariant1 = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <VariationSelectorContainer>
      <Selector>
        {items.map(item => (
          <SelectorItem {...item} key={item.key} />
        ))}
      </Selector>
    </VariationSelectorContainer>
  </ThemeProvider>
);

const buildVariant2 = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <SimpleSelectorContainer>
      <Selector>
        {items2.map(item => (
          <SelectorItem {...item} key={item.key} />
        ))}
      </Selector>
    </SimpleSelectorContainer>
  </ThemeProvider>
);

storiesOf('Selector', module).addDecorator(jsxDecorator).add('Selector Variant 1', buildVariant1);

storiesOf('Selector', module).addDecorator(jsxDecorator).add('Selector Variant 2', buildVariant2);
