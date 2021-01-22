import styled from 'styled-components';
import { background } from '@core/styles/variables';
import { TextDescriptionStyled } from '../../Text';

export const SelectorStyled = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none outside none;
`;
export const SelectorRowStyled = styled.li`
  display: flex;
  flex-grow: 99;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  cursor: pointer;
`;

export const SelectorRowAvatarStyled = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const SelectorRowAdditionStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;

  ${'span'} {
    white-space: nowrap;
  }
  ${'svg'} {
    margin-left: 4px;
  }
`;

export const SelectorItemStyled = styled(SelectorRowStyled)`
  background-color: ${background};
  ${TextDescriptionStyled} {
    margin-left: 8px;
    margin-right: auto;
  }
`;
