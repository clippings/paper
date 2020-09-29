import React from 'react';
import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface ListItemInterface extends ComponentInterface {
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
