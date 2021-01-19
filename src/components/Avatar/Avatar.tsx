import styled from 'styled-components';
import { AvatarPropsType } from './types/AvatarType';
import { AVATAR_SIZE } from './enums/AvatarSizeEnum';
import { AVATAR_SHAPE } from './enums/AvatarShapeEnum';

const sizeMap = {
  [AVATAR_SIZE.SMALL]: '20px',
  [AVATAR_SIZE.DEFAULT]: '40px',
  [AVATAR_SIZE.BIG]: '60px',
};

const shapeMap = {
  [AVATAR_SHAPE.CIRCLE]: '100%',
  [AVATAR_SHAPE.SQUARE]: '4px',
};

export const Avatar = styled.img.attrs((props: AvatarPropsType) => ({
  alt: props.alt || 'Avatar',
}))`
  width: ${(props: AvatarPropsType) => sizeMap[props.size] || sizeMap[AVATAR_SIZE.DEFAULT]};
  height: ${(props: AvatarPropsType) => sizeMap[props.size] || sizeMap[AVATAR_SIZE.DEFAULT]};
  border-radius: ${(props: AvatarPropsType) =>
    shapeMap[props.shape] || shapeMap[AVATAR_SHAPE.CIRCLE]};
`;
