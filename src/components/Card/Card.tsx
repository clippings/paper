import { CardStyled, CardImgContainerStyled, CardImgStyled } from './styles/Card';
import React from 'react';
import { TextDescription } from '../Text';
import { CardPropTypes } from './types/CardPropTypes';

export const Card: React.FunctionComponent<CardPropTypes> = ({
  img,
  alt,
  selected,
  description,
  children,
  ...rest
}) => (
  <CardStyled {...rest}>
    <CardImgContainerStyled selected={selected}>
      <CardImgStyled src={img} alt={alt} />
    </CardImgContainerStyled>
    <TextDescription primary={description.primary} secondary={description.secondary} />
    {children}
  </CardStyled>
);
