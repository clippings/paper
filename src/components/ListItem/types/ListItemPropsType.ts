import React from 'react';
import { LIST_ITEM_SIZE } from '@paper/enums';

export type ListItemPropsType = {
  children: React.ReactNode;
  size?: LIST_ITEM_SIZE;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
