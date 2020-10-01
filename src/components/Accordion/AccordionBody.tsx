import React from 'react';
import classNames from '../../core/config/ClassNames';
import { ComponentType } from '../../core/interfaces/ComponentType';

const AccordionBody: React.FunctionComponent<ComponentType> = ({ children }) => (
  <div className={classNames.accordion.body}>{children}</div>
);

export default AccordionBody;
