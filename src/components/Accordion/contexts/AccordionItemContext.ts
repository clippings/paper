import {createContext} from "react";

const AccordionItemContext = createContext({
  handleOpen: (): any => null,
});

export default AccordionItemContext;
