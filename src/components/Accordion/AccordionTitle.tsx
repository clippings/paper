import React, { useContext } from 'react';
import classnames from 'classnames';
import { ICON, ICONS_COLOR } from '@paper/enums';
import { Icon } from '@paper/components';
import AccordionItemContext from './contexts/AccordionItemContext';
import styleClasses from '@core/config/ClassNames';
import { AccordionTittlePropsType } from './types/AccordionTittlePropsType';

const AccordionTitle: React.FunctionComponent<AccordionTittlePropsType> = ({
  children = null,
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
