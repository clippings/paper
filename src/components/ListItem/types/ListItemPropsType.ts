import React from 'react';

export type ListItemPropsType = {
  children: React.ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
