import React from 'react';
import { storiesOf } from '@storybook/react';
import { IMAGE_COVER_TYPE, ImageCover } from '@paper';
import { jsxDecorator } from 'storybook-addon-jsx';

export const imageUrl =
  'https://res.cloudinary.com/clippings/image/upload/t_big/dpr_auto,f_auto,w_auto/v1565239179/products/edge-table-jennifer-newman-jennifer-newman-clippings-11280725.png';

const buildSingleImageCover = () => (
  <ImageCover image={imageUrl} type={IMAGE_COVER_TYPE.SINGLE}>
    <span>Title</span>
    <span>Subtitle</span>
  </ImageCover>
);

const buildMultipleImageCover = () => (
  <ImageCover image={imageUrl} type={IMAGE_COVER_TYPE.MULTIPLE}>
    +5
  </ImageCover>
);

storiesOf('Image cover', module)
  .addDecorator(jsxDecorator)
  .add('Single', buildSingleImageCover)
  .add('Multiple', buildMultipleImageCover);
