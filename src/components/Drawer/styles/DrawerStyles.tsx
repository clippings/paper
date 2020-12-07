import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { DrawerPropType } from '../types/DrawerPropType';
import { lightest } from '@core/styles/variables';

const openDirection = (props: Partial<DrawerPropType>): FlattenSimpleInterpolation => {
  const direction = props.openDirection;
  const offset = props.isOpen ? 0 : `-${props.width}px`;

  return css`
    ${direction}: ${offset};
    transition: 100ms ${direction} cubic-bezier(0, 0, 0.56, 1);
  `;
};

export const StyledDrawer = styled.div<Partial<DrawerPropType>>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${lightest};
  width: ${props => props.width}px;
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  ${props => props.openDirection && openDirection(props)}
`;
