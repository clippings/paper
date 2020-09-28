import React from 'react';
import classNames from '../../core/config/ClassNames';
import { ListItemInterface } from './interfaces/ListItemInterface';
import { KEY } from '../../core/enums/KeysEnum';

export const ListItem: React.FunctionComponent<ListItemInterface> = ({
  children,
  handleClick,
  ...rest
}) => {
  const onKeyPress = event => {
    if (event.key === KEY.ENTER) {
      handleClick && handleClick(event);
    }
  };

  return children ? (
    <div
      onKeyPress={onKeyPress}
      tabIndex={-1}
      className={classNames.listItem.container}
      onClick={handleClick}
      role="button"
      {...rest}
    >
      {children}
    </div>
  ) : null;
};
