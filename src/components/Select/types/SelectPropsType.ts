import React from 'react';

export type SelectPropsType = {
  options: {
    value?: number | string;
    label?: string | React.ReactNode;
  }[];
  name: string;
  label?: string;
  error?: string;
};
