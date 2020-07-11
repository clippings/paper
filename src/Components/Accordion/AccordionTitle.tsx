import React from 'react';
import classnames from 'classnames';
import { Icon, ICONS, ICONS_COLORS, ICONS_DIRECTIONS } from '../Icon';
import { createClassNameModifier } from '../../utils/classNames';
const titleClassNames = {
  title: createClassNameModifier('accordion', 'title'),
  titleWrap: createClassNameModifier('accordion', 'title__wrap'),
  titleActive: createClassNameModifier('accordion', 'title__active'),
};
type AccordionTitleProps = {
  onClick?: (...args: any[]) => any;
  classNames?: string;
};
const AccordionTitle: React.FunctionComponent<AccordionTitleProps> = ({
  children,
  onClick,
  classNames = '',
  ...rest
}) => (
  <div
    role="presentation"
    className={classnames(titleClassNames.title, classNames)}
    onClick={onClick && onClick}
    {...rest}
  >
    <div className={titleClassNames.titleWrap}>{children}</div>
    <Icon icon={ICONS.CHEVRON} direction={ICONS_DIRECTIONS.DOWN} color={ICONS_COLORS.DARK} />
  </div>
);

export default AccordionTitle;
