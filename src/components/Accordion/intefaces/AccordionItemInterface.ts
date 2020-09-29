import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface AccordionItemInterface extends ComponentInterface {
  onOpen?: Function;
  eventKey?: number | any | string;
  id: number | string;
}
