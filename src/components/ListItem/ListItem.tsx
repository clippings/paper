import React from 'react';
import classNames from '../../core/config/ClassNames';
import { ListItemPropsType } from './types/ListItemPropsType';
import { KEY } from '../../core/enums/KeysEnum';

export const ListItem: React.FunctionComponent<ListItemPropsType> = ({
  children = null,
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
