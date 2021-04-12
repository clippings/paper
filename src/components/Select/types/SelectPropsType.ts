import React from 'react';

export type SelectPropsType = {
  options: {
    value?: number | string;
    label?: string | React.ReactNode;
  }[];
  required?: boolean;
  name: string;
  label?: string;
  error?: string;
};
