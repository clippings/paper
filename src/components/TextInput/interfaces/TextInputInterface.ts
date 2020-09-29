import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface TextInputInterface extends ComponentInterface {
  placeholderText: string;
  title: string | number;
  error: string | number;
  onChange: Function;
  className?: string;
}
