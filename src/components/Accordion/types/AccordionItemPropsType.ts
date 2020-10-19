import React, { MutableRefObject } from 'react';

export type AccordionItemPropsType = {
  onOpen?: (eventKey: any, ref: MutableRefObject<HTMLElement | null>) => void;
  eventKey: any;
  id: number | string;
  children: React.ReactNode;
};
