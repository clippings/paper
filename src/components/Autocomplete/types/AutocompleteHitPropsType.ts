import React from 'react';
import { ComponentType } from '@paper/core/interfaces/ComponentType';

export type AutocompleteHitPropsType = {
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  scrollTo: (current: any) => void;
} & ComponentType;
