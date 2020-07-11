import React from 'react';
import classnames from 'classnames';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import { createClassNameModifier } from '../../utils/classNames';
const classNames = {
  item: createClassNameModifier('accordion', 'item'),
};
type AccordionItemProps = {
  onItemClick?: (...args: any[]) => any;
  onOpen?: (...args: any[]) => any;
  eventKey?: number | any | string;
  active?: boolean;
  index?: number;
};

export type AccordionItemType = React.FunctionComponent<AccordionItemProps>;
const AccordionItem: AccordionItemType = ({
  children,
  onItemClick,
  onOpen,
  active,
  index,
  eventKey,
}) => {
  const handleOpen = () => {
    onItemClick && onItemClick(index);
    onOpen && onOpen(eventKey);
  };
  const title = React.Children.toArray(children).filter(child => child.type === AccordionTitle)[0];
  const body = React.Children.toArray(children).filter(child => child.type === AccordionBody)[0];
  return (
    <div className={classnames(classNames.item, { collapsed: !active })}>
      <AccordionTitle {...title.props} onClick={handleOpen} />
      <AccordionBody {...body.props} />
    </div>
  );
};
AccordionItem.defaultProps = {
  active: false,
  index: 0,
  eventKey: null,
};
AccordionItem.Title = AccordionTitle;
AccordionItem.Body = AccordionBody;
export default AccordionItem;
