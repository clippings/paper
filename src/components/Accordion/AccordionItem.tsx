import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import AccordionContext from './contexts/AccordionContext';
import AccordionItemContext from './contexts/AccordionItemContext';
import classNames from '@core/config/ClassNames';
import { AccordionItemPropsType } from './types/AccordionItemPropsType';

const AccordionItem: React.FunctionComponent<AccordionItemPropsType> & {
  Title: typeof AccordionTitle;
  Body: typeof AccordionBody;
} = ({ children = null, onOpen, eventKey = null, id }) => {
  const { isActive, onClick } = useContext(AccordionContext);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (): void => {
    onClick(id);
    onOpen && onOpen(eventKey, itemRef);
  };
  return (
    <div
      ref={itemRef}
      className={classnames(classNames.accordion.item, { collapsed: !isActive(id) })}
    >
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
