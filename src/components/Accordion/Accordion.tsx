import React, { useState } from 'react';
import classnames from 'classnames';
import '@paper/assets/scss/accordion.scss';
import AccordionItem from './AccordionItem';
import AccordionContext from './contexts/AccordionContext';
import classNames from '@core/config/ClassNames';
import { AccordionPropsType } from './types/AccordionPropsType';

export const Accordion: React.FunctionComponent<AccordionPropsType> & {
  Item: typeof AccordionItem;
} = ({ defaultOpened = null, disabled = false, children }) => {
  const [active, setActive] = useState<number | string | null>(defaultOpened);

  const onItemClick = (id: number | string | null) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className={classnames(classNames.accordion.container, { disabled })}>
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
