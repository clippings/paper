import React from 'react';

export type DateInputPropsTypes = {
  onChange: (date: Date) => void;
  placeholderText: string;
  className?: string;
  title?: React.ReactChild;
  error?: React.ReactChild;
  dateFormat?: string;
  disabled?: boolean;
  maxDate?: any;
  minDate?: any;
  selected?: any;
};
