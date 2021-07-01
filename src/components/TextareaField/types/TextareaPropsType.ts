import React, { RefObject } from 'react';

export type TextareaPropsType = {
  resizable?: boolean;
  id?: string;
  title?: string | number | React.ReactNode;
  error?: string | number | null;
  className?: string;
  note?: string | React.ReactNode;
  ref?: RefObject<HTMLTextAreaElement>;
};
