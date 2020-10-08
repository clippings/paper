import React from 'react';
import { HEADING_TYPE } from '@paper/enums';

export type HeadingPropsType = {
  children: React.ReactNode;
  type?: HEADING_TYPE;
  className?: string;
};
