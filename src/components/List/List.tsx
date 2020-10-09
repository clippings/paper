import React from 'react';
import classNames from '@core/config/ClassNames';
import classnames from 'classnames';
import { LIST_SPACING } from '@paper/enums';
import { ListPropsType } from './types/ListPropsType';

export const List: React.FunctionComponent<ListPropsType> = ({
  children = null,
  spacing = LIST_SPACING.DEFAULT,
  className = '',
}) => (
  <div className={classnames(className, classNames.list.container, classNames.list[spacing])}>
    {children}
  </div>
);
