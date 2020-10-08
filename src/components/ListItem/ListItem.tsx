import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { ListItemPropsType } from './types/ListItemPropsType';
import { KEY } from '@core/enums/KeysEnum';
import { LIST_ITEM_SIZE } from '@paper/enums';

export const ListItem: React.FunctionComponent<ListItemPropsType> = ({
  children = null,
  onClick = null,
  size = LIST_ITEM_SIZE.DEFAULT,
  className = '',
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
        tabIndex: -1,
      }
    : {};

  return (
    <div
      className={classnames(
        className,
        classNames.listItem.container,
        { [classNames.listItem.clickable]: onClick },
        classNames[size]
      )}
      {...clickableProps}
      {...rest}
    >
      {children}
    </div>
  );
};
