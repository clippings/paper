import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { ListNumberPropType } from './types/ListNumberPropType';

export const ListNumber: React.FunctionComponent<ListNumberPropType> = ({
  className,
  children = null,
}) => <ol className={classnames(classNames.listNumber.container, className)}>{children}</ol>;
