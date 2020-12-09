import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { DrawerPropType } from '../types/DrawerPropType';

const openDirection = (props: Partial<DrawerPropType>): FlattenSimpleInterpolation => {
  const direction = props.openDirection;
  const offset = props.isOpen ? 0 : `-${props.width}`;
  return css`
    ${direction}: ${offset};
    transition: 100ms ${direction} cubic-bezier(0, 0, 0.56, 1);
  `;
};

export const StyledDrawer = styled.div<Partial<DrawerPropType>>`
  box-sizing: border-box;
  width: ${props => props.width};
  position: absolute;
  top: ${props => props.top};
  ${props => props.openDirection && openDirection(props)}
`;
