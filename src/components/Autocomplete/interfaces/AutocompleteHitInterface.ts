import React from 'react';

export interface AutocompleteHitInterface {
  active: boolean;
  children: React.ReactNode,
  onClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
  scrollTo: Function,
}
