import { createContext } from 'react';

const AccordionItemContext = createContext({
  handleOpen: (): void => {},
});

export default AccordionItemContext;
