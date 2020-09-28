import React, { useContext } from 'react';
import classnames from 'classnames';
import { Icon, ICON, ICONS_COLOR } from '@paper';
import AccordionItemContext from './contexts/AccordionItemContext';
import styleClasses from '../../core/config/ClassNames';
import { AccordionTittleInterface } from './intefaces/AccordionTittleInterface';

const AccordionTitle: React.FunctionComponent<AccordionTittleInterface> = ({
  children,
  classNames = '',
  ...rest
}) => {
  const { handleOpen } = useContext(AccordionItemContext);

  return (
    <div
      role="presentation"
      className={classnames(styleClasses.accordion.title, classNames)}
      onClick={handleOpen}
      {...rest}
    >
      <div className={styleClasses.accordion.titleWrap}>{children}</div>
      <Icon icon={ICON.CHEVRON} color={ICONS_COLOR.DARK} />
    </div>
  );
};

export default AccordionTitle;
