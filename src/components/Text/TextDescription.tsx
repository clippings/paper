import React from 'react';
import { Text } from './Text';
import { TEXT_TYPE } from './enums/TextTypeEnum';
import { TEXT_COLOR } from './enums/TextColorEnum';
import { TextDescriptionStyled } from './styles/TextDescriptionStyled';
import { TextDescriptionPropsType } from './types/TextPropsType';
export const TextDescription: React.FunctionComponent<TextDescriptionPropsType> = ({
  primary,
  secondary,
}) => (
  <TextDescriptionStyled>
    <Text>{primary}</Text>
    {secondary && (
      <Text type={TEXT_TYPE.SMALL} color={TEXT_COLOR.MUTED}>
        {secondary}
      </Text>
    )}
  </TextDescriptionStyled>
);
