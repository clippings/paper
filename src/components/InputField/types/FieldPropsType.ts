import React, { RefObject } from 'react';

export type FieldPropsType = {
  id?: string;
  type?: string;
  placeholderText?: string;
  title?: string | number | React.ReactNode;
  error?: string | number | null;
  onChange?: (value: string) => void;
  className?: string;
  ref?: RefObject<HTMLInputElement>;
};
