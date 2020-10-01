import { createContext } from 'react';

const AccordionContext = createContext({
  isActive: (id: number | string): boolean => false,
  onClick: (id?: number | string): void => () => {},
});

export default AccordionContext;
