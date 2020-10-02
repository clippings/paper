import React from 'react';
import { TEXT_TYPE } from '@paper/enums';

export type TextPropsType = {
  children: React.ReactNode;
  type: TEXT_TYPE;
  className?: string;
};
