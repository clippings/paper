import React from 'react';
import { TEXT_TYPE, TEXT_COLOR } from '@paper/enums';

export type TextPropsType = {
  children: React.ReactNode;
  type?: TEXT_TYPE;
  color?: TEXT_COLOR;
  className?: string;
};
