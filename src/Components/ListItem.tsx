import React from 'react';
import { createComponentClassName } from '../utils/classNames';
const classNames = {
  container: createComponentClassName('list-item', 'container'),
  content: createComponentClassName('list-item', 'content'),
};
const handleKeyPressEnter = (event, callback) => {
  if (event.key === 'Enter') {
    callback();
  }
};
type ListItemProps = {
  handleClick?: (...args: any[]) => any;
};
export const ListItem: React.FunctionComponent<ListItemProps> = ({ children, handleClick }) => {
  const onKeyPress = event => {
    handleKeyPressEnter(event, () => handleClick);
  };
  return (
    <div
      onKeyPress={onKeyPress}
      tabIndex={-1}
      className={classNames.container}
      onClick={handleClick}
      role="button"
    >
      {children}
    </div>
  );
};
