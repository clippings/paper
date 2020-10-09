import React from 'react';
import { LIST_SPACING } from '@paper/enums';

export type ListPropsType = {
  children?: React.ReactNode | null;
  spacing?: LIST_SPACING;
  className?: string;
};
