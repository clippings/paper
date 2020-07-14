import React from 'react';
import { createClassNameModifier } from '@src/utils/classNames';
const classNames = {
  body: createClassNameModifier('accordion', 'body'),
};
const AccordionBody: React.FunctionComponent<{}> = ({ children }) => (
  <div className={classNames.body}>{children}</div>
);
export default AccordionBody;
