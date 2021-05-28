import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SelectorItem, Selector } from '@paper/components';
import { ICON, AVATAR_SHAPE } from '@paper/enums';
import { IconAvatarStyled } from '../../components/Avatar';
import { SelectorRowStyled } from '../../components/Selector/styles/Selector';

const items = [
  {
    key: 'key-0',
    avatar: null,
    avatarShape: AVATAR_SHAPE.CIRCLE,
    description: { primary: 'Item without picture', secondary: 'Sub tex' },
    addition: '8 options',
  },
  {
    key: 'key-1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1519366670/fabrics/f-1288-c0472.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    description: { primary: 'Item with good quality img', secondary: 'Sub tex' },
    addition: '9 options',
  },

  {
    key: 'key-2',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1480675752/fabrics/table-top-and-fronts-13-american-walnut-clippings-1793862.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    description: { primary: 'Item with low quality img', secondary: 'Sub tex' },
    addition: '9 options',
  },
  {
    key: 'key-3',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1480676106/fabrics/blotter-and-sideboard-cover-leather-premium-77-brown-clippings-8666772.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    description: { primary: 'Item without sub text', secondary: null },
    addition: '5 options',
  },
  {
    key: 'key-4',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1480676084/fabrics/base-52-soft-light-powder-coated-smooth-clippings-8666755.jpg',
    avatarShape: AVATAR_SHAPE.CIRCLE,
    description: { primary: 'Item without addition text', secondary: null },
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
    description: { primary: 'Project', secondary: null },
    addition: null,
  },

  {
    key: 'key-6',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/t_square_tiny/dpr_auto,f_auto,w_auto/v9/products/iron-maiden-sofa-a6126-cosme-beige-h-bahia-200-x-90-moroso-diesel-creative-team-clippings-10497301.jpg',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    description: { primary: 'Project', secondary: null },
    addition: ' ',
  },

  {
    key: 'key-6.1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/t_square_tiny/dpr_auto,f_auto,w_auto/v9/products/iron-maiden-sofa-a6126-cosme-beige-h-bahia-200-x-90-moroso-diesel-creative-team-clippings-10497301.jpg',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    description: { primary: 'Project', secondary: null },
    addition: '3 spaces',
  },
  {
    key: 'key-7',
    avatar: null,
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    description: { primary: 'Space', secondary: null },
    addition: '',
  },
  {
    key: 'key-7.1.1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1525254144/placeholders/empty_project.png',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    description: { primary: 'Space', secondary: null },
    addition: '',
  },
  {
    key: 'key-7.1',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1525254144/placeholders/empty_project.png',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    description: { primary: 'Space sub spaces', secondary: null },
    addition: ' ',
  },
  {
    key: 'key-7.2',
    avatar:
      'https://res.cloudinary.com/clippings/image/upload/v1525254144/placeholders/empty_project.png',
    icon: ICON.MOVE_TO,
    avatarShape: AVATAR_SHAPE.SQUARE,
    description: { primary: 'Space sub spaces', secondary: null },
    addition: '2 spaces',
  },
];

const VariationSelectorContainer = styled.div`
  max-width: 500px;
  margin: -1rem;
  display: flex;
  background-color: #fff;
  padding: 16px;
  
  ${SelectorRowStyled} {
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: #f5f5f5;
    ${IconAvatarStyled} {
      background-color: #fff;
    }
  }

  @media only screen and (min-width: 768px) {

    background-color: #f5f5f5;
    ${SelectorRowStyled} {
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
  ${SelectorRowStyled}:hover {
    background-color: #f5f5f5;
    ${IconAvatarStyled} {
      background-color: #fff;
    }
  }
`;

export const BuildVariant1 = args => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <VariationSelectorContainer>
      <Selector>
        {items.map(item => (
          <SelectorItem {...item} key={item.key} {...args} />
        ))}
      </Selector>
    </VariationSelectorContainer>
  </ThemeProvider>
);

export const BuildVariant2 = args => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <SimpleSelectorContainer>
      <Selector>
        {items2.map(item => (
          <SelectorItem {...item} key={item.key} {...args} />
        ))}
      </Selector>
    </SimpleSelectorContainer>
  </ThemeProvider>
);
