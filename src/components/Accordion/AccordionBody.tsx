import React from 'react';
import classNames from '../../core/config/ClassNames';

const AccordionBody: React.FunctionComponent<{}> = ({ children }) => (
  <div className={classNames.accordion.body}>{children}</div>
);

export default AccordionBody;
