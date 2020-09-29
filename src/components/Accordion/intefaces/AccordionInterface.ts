import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface AccordionInterface extends ComponentInterface {
  defaultOpened?: number | string | null;
  disabled?: boolean;
}
