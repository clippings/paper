import React from 'react';

export type AutocompleteInputPropsType = {
  onChange?: (label: string) => void;
  onSearch: (searched: string) => void;
  placeholder: string;
  defaultValue?: string;
  min?: number;
  hits?: Array<{
    label: string;
    image?: string;
  }>;
  children?: (hit: { label: string; image?: string }, active: boolean) => React.ReactNode;
  className?: string;
  debounceRate?: number;
};
