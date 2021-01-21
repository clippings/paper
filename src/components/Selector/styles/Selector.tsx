import styled from 'styled-components';

export const Selector = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none outside none;
`;
export const SelectorRow = styled.li`
  display: flex;
  flex-grow: 99;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  cursor: pointer;
`;
