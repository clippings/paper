import React from 'react';

export interface SelectInterface {
  options: {
    value?: any | number | string;
    label?: string | React.ReactNode;
  }[];
  selected?: any | number | string;
  placeholder?: string;
  onChange: Function;
}

