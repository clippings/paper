import React from 'react';
import { TEXT_COLOR, TEXT_TYPE, ICON, ICONS_SIZE } from '@paper/enums';
import { Avatar, IconAvatar } from '../Avatar';
import { Icon } from '../Icon/Icon';
import { SelectorItemType } from './types/SelectorItemTypes';
import { KEY } from '@core/enums/KeysEnum';
import { Text, TextDescription } from '../Text';
import {
  SelectorRowAvatarStyled,
  SelectorItemStyled,
  SelectorRowAdditionStyled,
} from './styles/Selector';

export const SelectorItem: React.FunctionComponent<SelectorItemType> = ({
  avatar,
  avatarShape,
  icon,
  description,
  addition,
  className,
  onClick,
  ...rest
}) => {
  const onKeyPress = event => {
    if (event.key === KEY.ENTER) {
      onClick && onClick(event);
    }
  };

  const clickableProps = onClick
    ? {
        onClick,
        onKeyPress,
        role: 'button',
        tabIndex: 0,
      }
    : {};
  return (
    <SelectorItemStyled className={className} {...rest} {...clickableProps}>
      <SelectorRowAvatarStyled>
        {avatar ? (
          <Avatar src={avatar} shape={avatarShape} />
        ) : (
          <IconAvatar icon={icon || ICON.LIST} shape={avatarShape} />
        )}
      </SelectorRowAvatarStyled>

      <TextDescription primary={description.primary} secondary={description.secondary} />
      {addition && (
        <SelectorRowAdditionStyled>
          <Text type={TEXT_TYPE.SMALL} color={TEXT_COLOR.MUTED}>
            {addition}
          </Text>
          <Icon icon={ICON.CHEVRON} size={ICONS_SIZE.SMALL} />
        </SelectorRowAdditionStyled>
      )}
    </SelectorItemStyled>
  );
};
