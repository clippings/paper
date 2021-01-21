import React from 'react';
import styled from 'styled-components';
import { TEXT_COLOR, TEXT_TYPE, ICON, ICONS_SIZE } from '@paper/enums';
import { SelectorRow } from './styles/Selector';
import { Avatar, IconAvatarStyled, IconAvatar } from '../Avatar';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { background, lightest } from '@core/styles/variables';
import { SelectorItemType } from './types/SelectorItemTypes';

const TextAddition = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;

  ${'span'} {
    white-space: nowrap;
    margin-right: 4px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: auto;
`;

const StyledSelectorRow = styled(SelectorRow)`
  background-color: ${background};

  ${IconAvatarStyled} {
    background-color: ${lightest};
    align-self: flex-start;
  }

  ${Avatar} {
    background-color: ${lightest};
    align-self: flex-start;
  }
`;

export const SelectorItem: React.FunctionComponent<SelectorItemType> = ({
  avatar,
  avatarShape,
  icon,
  text,
  subText,
  addition,
  className,
  ...rest
}) => (
  <StyledSelectorRow className={className} {...rest}>
    {avatar ? (
      <Avatar src={avatar} shape={avatarShape} />
    ) : (
      <IconAvatar icon={icon || ICON.LIST} shape={avatarShape} />
    )}
    <TextContainer>
      <Text>{text}</Text>
      {subText && (
        <Text type={TEXT_TYPE.SMALL} color={TEXT_COLOR.MUTED}>
          {subText}
        </Text>
      )}
    </TextContainer>
    {addition && (
      <TextAddition>
        <Text type={TEXT_TYPE.SMALL} color={TEXT_COLOR.MUTED}>
          {addition}
        </Text>
        <Icon icon={ICON.CHEVRON} size={ICONS_SIZE.SMALL} />
      </TextAddition>
    )}
  </StyledSelectorRow>
);
