import React from 'react';
import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface AutocompleteHitInterface extends ComponentInterface {
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  scrollTo: (current: any) => void;
}
