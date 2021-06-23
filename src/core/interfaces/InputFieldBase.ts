import React from 'react';

export interface InputFieldBase {
  id?: string;
  placeholderText?: string;
  title?: string | number | React.ReactNode;
  error?: string | number;
  onChange?: (value: string) => void;
  className?: string;
}
