import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface AccordionItemInterface extends ComponentInterface {
  onOpen?: (eventKey: any) => void;
  eventKey: any;
  id: number | string;
}
