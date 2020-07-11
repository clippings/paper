import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { IMAGE_COVER_TYPES, ImageCover } from'../../';

export const imageUrl =
  'https://res.cloudinary.com/clippings/image/upload/t_big/dpr_auto,f_auto,w_auto/v1565239179/products/edge-table-jennifer-newman-jennifer-newman-clippings-11280725.png';

const buildSingleImageCover = () => (
  <ImageCover image={imageUrl} type={IMAGE_COVER_TYPES.SINGLE}>
    <span>Title</span>
    <span>Subtitle</span>
  </ImageCover>
);

const buildMultipleImageCover = () => (
  <ImageCover image={imageUrl} type={IMAGE_COVER_TYPES.MULTIPLE}>
    +5
  </ImageCover>
);

storiesOf('Paper/Components/Image cover', module)
  .add('Single', buildSingleImageCover)
  .add('Multiple', buildMultipleImageCover)
  .addDecorator(jsxDecorator);
