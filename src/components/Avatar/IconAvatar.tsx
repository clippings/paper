import React from 'react';
import { IconAvatarPropsType } from './types/AvatarType';
import { Icon } from '../Icon/Icon';
import { ICONS_SIZE } from '@paper/enums';
import { IconAvatarStyled } from './styles/AvatarStyles';

export const IconAvatar: React.FunctionComponent<IconAvatarPropsType> = ({
  icon,
  color,
  size,
  shape,
  className,
}) => (
  <IconAvatarStyled size={size} shape={shape} className={className}>
    <Icon size={ICONS_SIZE.SMALL} icon={icon} color={color} />
  </IconAvatarStyled>
);
