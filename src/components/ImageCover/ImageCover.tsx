import React from 'react';
import { IMAGE_COVER_TYPE } from './enums/ImageCoverTypeEnum';
import { ImageCoverInterface } from './interfaces/ImageCoverInterface';
import classNames from '../../core/config/ClassNames';

export const ImageCover: React.FunctionComponent<ImageCoverInterface> = ({
  image,
  children,
  type,
  imageTitle = '',
  className = '',
}) => (
  <figure
    className={`${
      type === IMAGE_COVER_TYPE.SINGLE
        ? classNames.imageCover.containerSingle
        : classNames.imageCover.containerMultiple
    } ${className}`}
  >
    <img
      className={
        type === IMAGE_COVER_TYPE.SINGLE
          ? classNames.imageCover.imageSingle
          : classNames.imageCover.imageMultiple
      }
      src={image}
      alt={imageTitle}
    />
    {type === IMAGE_COVER_TYPE.SINGLE ? (
      <figcaption className={classNames.imageCover.textContainer}>{children}</figcaption>
    ) : (
      <figcaption className={classNames.imageCover.quantityContainer}>{children}</figcaption>
    )}
  </figure>
);
