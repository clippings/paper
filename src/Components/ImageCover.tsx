import React from 'react';
import { createClassName, createComponentClassName } from '../utils/classNames';
export const IMAGE_COVER_TYPES = {
  MULTIPLE: 'multiple',
  SINGLE: 'single',
};
const classNames = {
  containerSingle: createClassName('image-cover-single'),
  containerMultiple: createClassName('image-cover-multiple'),
  quantityContainer: createComponentClassName('image-cover', 'quantity-container'),
  textContainer: createComponentClassName('image-cover', 'text-container'),
  imageSingle: createComponentClassName('image-cover', 'image-single'),
  imageMultiple: createComponentClassName('image-cover', 'image-multiple'),
};
type ImageCoverProps = {
  image: string;
  imageTitle?: string;
  className?: string;
  type: any;
};
export const ImageCover: React.FunctionComponent<ImageCoverProps> = ({
  image,
  children,
  type,
  imageTitle,
  className,
}) => (
  <figure
    className={`${
      type === IMAGE_COVER_TYPES.SINGLE ? classNames.containerSingle : classNames.containerMultiple
    } ${className}`}
  >
    <img
      className={
        type === IMAGE_COVER_TYPES.SINGLE ? classNames.imageSingle : classNames.imageMultiple
      }
      src={image}
      alt={imageTitle}
    />
    {type === IMAGE_COVER_TYPES.SINGLE ? (
      <figcaption className={classNames.textContainer}>{children}</figcaption>
    ) : (
      <figcaption className={classNames.quantityContainer}>{children}</figcaption>
    )}
  </figure>
);
ImageCover.defaultProps = {
  imageTitle: '',
  className: '',
};
