import React, { createContext, MutableRefObject, useContext, useEffect, useRef } from 'react';
import classnames from 'classnames';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import { AccordionContext } from './Accordion';
import { createClassNameModifier } from '@src/utils/classNames';
const classNames = {
  item: createClassNameModifier('accordion', 'item'),
};
type AccordionItemProps = {
  onOpen?: (...args: any[]) => any;
  eventKey?: number | any | string;
  id: number | string;
};

export const AccordionItemContext = createContext({
  handleOpen: (): any => null,
});
export type AccordionItemType = React.FunctionComponent<AccordionItemProps> & {
  Title: typeof AccordionTitle;
  Body: typeof AccordionBody;
};
const AccordionItem: AccordionItemType = ({ children, onOpen, eventKey, id }) => {
  const { isActive, onClick } = useContext(AccordionContext);

  const handleOpen = () => {
    onClick(id);
    onOpen && onOpen(eventKey);
  };
  return (
    <div className={classnames(classNames.item, { collapsed: !isActive(id) })}>
      <AccordionItemContext.Provider
        value={{
          handleOpen,
        }}
      >
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
};
AccordionItem.defaultProps = {
  eventKey: null,
};
AccordionItem.Title = AccordionTitle;
AccordionItem.Body = AccordionBody;
export default AccordionItem;
