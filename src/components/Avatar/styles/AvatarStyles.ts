import styled from 'styled-components';
import { AvatarShapeType } from '../types/AvatarType';
import { AVATAR_SIZE } from '../enums/AvatarSizeEnum';
import { AVATAR_SHAPE } from '../enums/AvatarShapeEnum';
import { lightest } from '@core/styles/variables';

const sizeMap = {
  [AVATAR_SIZE.SMALL]: '32px',
  [AVATAR_SIZE.MEDIUM]: '40px',
  [AVATAR_SIZE.BIG]: '48px',
};

const shapeMap = {
  [AVATAR_SHAPE.CIRCLE]: '100%',
  [AVATAR_SHAPE.SQUARE]: '4px',
};

const buildStyles = ({
  size = AVATAR_SIZE.MEDIUM,
  shape = AVATAR_SHAPE.CIRCLE,
}: AvatarShapeType) => `
  width: ${sizeMap[size]};
  min-width: ${sizeMap[size]};
  height: ${sizeMap[size]};
  min-height: ${sizeMap[size]};
  border-radius: ${shapeMap[shape]};`;

export const Avatar = styled.img.attrs(props => ({
  alt: props.alt || 'Avatar',
}))(buildStyles);

export const IconAvatarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => lightest(props)};
  ${(props: AvatarShapeType) => buildStyles(props)}
`;
