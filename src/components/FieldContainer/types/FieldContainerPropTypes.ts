import React from 'react';

export type FieldContainerPropTypes = {
  id?: string;
  title?: string | number | React.ReactNode;
  error?: string | number | null;
  className?: string;
  children: React.ReactNode;
  note?: string | React.ReactNode;
};
