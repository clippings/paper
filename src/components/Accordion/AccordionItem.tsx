import React, { useContext } from 'react';
import classnames from 'classnames';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import AccordionContext from './contexts/AccordionContext';
import AccordionItemContext from './contexts/AccordionItemContext';
import classNames from '../../core/config/ClassNames';
import { AccordionItemInterface } from './intefaces/AccordionItemInterface';

const AccordionItem: React.FunctionComponent<AccordionItemInterface> & {
  Title: typeof AccordionTitle;
  Body: typeof AccordionBody;
} = ({ children, onOpen, eventKey = null, id }) => {
  const { isActive, onClick } = useContext(AccordionContext);

  const handleOpen = (): void => {
    onClick(id);
    onOpen && onOpen(eventKey);
  };

  return (
    <div className={classnames(classNames.accordion.item, { collapsed: !isActive(id) })}>
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

AccordionItem.Title = AccordionTitle;
AccordionItem.Body = AccordionBody;

export default AccordionItem;
