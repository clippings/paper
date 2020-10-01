import { createContext } from 'react';

const AccordionContext = createContext({
  isActive: (id: number | string | null): boolean => false,
  onClick: (id?: number | string | null): void => () => {},
});

export default AccordionContext;
