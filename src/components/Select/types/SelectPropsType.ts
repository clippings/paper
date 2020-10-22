import React from 'react';

export type SelectPropsType = {
  options: {
    value?: any | number | string;
    label?: string | React.ReactNode;
  }[];
  selected?: any | number | string;
  placeholder?: string;
  onChange?: (value: string) => void;
  name?: string;
};
