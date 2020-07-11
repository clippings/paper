import React, { useState } from 'react';
import classnames from 'classnames';
import { createClassName } from '../../utils/classNames';
import AccordionItem, { AccordionItemType } from './AccordionItem';
import '../../assets/scss/accordion.scss';

const classNames = {
  container: createClassName('accordion'),
};
type AccordionProps = {
  defaultOpened?: number;
};
type AccordionType = React.FunctionComponent<AccordionProps> & { Item: AccordionItemType };

export const Accordion: AccordionType = ({ children, defaultOpened }) => {
  const [active, setActive] = useState(defaultOpened);
  const onItemClick = index => setActive(active === index ? null : index);
  return (
    <div className={classnames(classNames.container)}>
      {React.Children.toArray(children).map((item, index) => {
        const isActive = active === index;
        return (
          <Accordion.Item
            {...item.props}
            active={isActive}
            onItemClick={onItemClick}
            index={index}
            key={`accordion-${index + 1}`}
          />
        );
      })}
    </div>
  );
};

Accordion.Item = AccordionItem;
