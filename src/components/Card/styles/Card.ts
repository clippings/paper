import styled from 'styled-components';
import { CardImgContainerPropTypes } from '../types/CardPropTypes';

const borderSize = 2;
export const CardImgStyled = styled.img`
  width: 100%;
  min-height: 100%;
  border-radius: 4px;
  background-color: white;
`;

export const CardImgContainerStyled = styled.div<CardImgContainerPropTypes>`
  border-radius: 4px;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  border: ${borderSize}px solid transparent;
  margin: -${borderSize}px;
  ${({ selected }) => selected && 'border-color: #000;'}
  ${CardImgStyled} {
    ${({ selected }) =>
      selected &&
      `border: ${borderSize}px solid #fff; max-width: calc(100% - ${borderSize * 2}px);`}
  }
`;

export const CardStyled = styled.div`
  position: relative;
  ${CardImgContainerStyled} {
    margin-bottom: ${8 - borderSize}px;
  }
`;
