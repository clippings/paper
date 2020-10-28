import React from 'react';

export type OverlayPropsType = {
  children?: React.ReactNode | null;
  content?: React.ReactNode | null;
  zIndex?: number;
  className?: string;
  positioning?: string;
  open?: boolean | null;
};
