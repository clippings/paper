import React from 'react';

export type EmailInputPropsType = {
  id?: string;
  placeholderText?: string;
  title?: string | number | React.ReactNode;
  error?: string | number;
  onChange?: (value: string) => void;
  className?: string;
};
