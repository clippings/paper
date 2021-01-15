import React from 'react';

export type TextInputPropsType = {
  id?: string;
  placeholderText?: string;
  title: string | number | React.ReactNode;
  error: string | number;
  onChange?: (value: string) => void;
  className?: string;
};
