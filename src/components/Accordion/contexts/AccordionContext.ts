import { createContext } from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
const AccordionContext = createContext({
  isActive: (id: number | string | null): boolean => false,
  onClick: (id?: number | string | null): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */
export default AccordionContext;
