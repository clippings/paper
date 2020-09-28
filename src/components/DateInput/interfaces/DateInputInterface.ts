import React from 'react';

export interface DateInputInterface {
  className?: string;
  title?: React.ReactChild;
  error?: React.ReactChild;
  dateFormat?: string;
  disabled?: boolean;
  maxDate?: any;
  minDate?: any;
  onChange: Function;
  placeholderText: string;
  selected?: any;
}
