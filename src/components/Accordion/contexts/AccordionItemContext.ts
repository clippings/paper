import { createContext } from 'react';

const AccordionItemContext = createContext({
  handleOpen: (): void => null,
});

export default AccordionItemContext;
