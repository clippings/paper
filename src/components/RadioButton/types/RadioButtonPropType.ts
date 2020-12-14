import React from 'react';

export type RadioButtonPropType = {
  children?: React.ReactNode;
  className?: string;
  onChange?: (value: string) => void;
  name: string;
  value: string;
};
