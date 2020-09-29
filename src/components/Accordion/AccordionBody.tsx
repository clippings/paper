import React from 'react';
import classNames from '../../core/config/ClassNames';
import { ComponentInterface } from '../../core/interfaces/ComponentInterface';

const AccordionBody: React.FunctionComponent<ComponentInterface> = ({ children }) => (
  <div className={classNames.accordion.body}>{children}</div>
);

export default AccordionBody;
