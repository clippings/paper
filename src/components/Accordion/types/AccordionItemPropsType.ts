import React from 'react';

export type AccordionItemPropsType = {
  onOpen?: (eventKey: any) => void;
  eventKey: any;
  id: number | string;
  children: React.ReactNode;
};
