import React, { useState, createContext } from 'react';
import classnames from 'classnames';
import { createClassName } from '@src/utils/classNames';
import '@src/assets/scss/accordion.scss';
import AccordionItem, { AccordionItemType } from './AccordionItem';

export const AccordionContext = createContext({
  isActive: (id: number | string): boolean => false,
  onClick: (id?: number | string): any => () => {},
});

const classNames = {
  container: createClassName('accordion'),
};
type AccordionProps = {
  defaultOpened?: number | string;
};
type AccordionType = React.FunctionComponent<AccordionProps> & { Item: AccordionItemType };

export const Accordion: AccordionType = ({ children, defaultOpened }) => {
  const [active, setActive] = useState(defaultOpened);
  const onItemClick = id => setActive(active === id ? null : id);
  return (
    <div className={classnames(classNames.container)}>
      <AccordionContext.Provider
        value={{
          isActive: (id: number): boolean => active === id,
          onClick: onItemClick,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

Accordion.Item = AccordionItem;
