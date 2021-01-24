import styled from 'styled-components';
import { CardImgContainerPropTypes } from '../types/CardPropTypes';

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
  ${({ selected }) => selected && 'border: 2px solid #000; margin: -2px;'}
  ${CardImgStyled} {
    ${({ selected }) => selected && 'border: 2px solid #fff; max-width: calc(100% - 4px);'}
  }
`;

export const CardStyled = styled.div`
  position: relative;
  ${CardImgContainerStyled} {
    margin-bottom: 8px;
  }
`;
