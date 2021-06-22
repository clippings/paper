import { RefObject } from 'react';

export type InputPropsType = {
  id?: string;
  placeholderText?: string;
  onChange?: (value: string) => void;
  className?: string;
  ref?: RefObject<HTMLInputElement>;
  type?: string;
  placeholder?: string;
};
