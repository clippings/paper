import React, { useContext } from 'react';
import classnames from 'classnames';
import { Icon, ICONS, ICONS_COLORS, ICONS_DIRECTIONS } from '../Icon';
import { createClassNameModifier } from '../../utils/classNames';
import { AccordionItemContext } from '@src/Components/Accordion/AccordionItem';
const titleClassNames = {
  title: createClassNameModifier('accordion', 'title'),
  titleWrap: createClassNameModifier('accordion', 'title__wrap'),
  titleActive: createClassNameModifier('accordion', 'title__active'),
};
type AccordionTitleProps = {
  classNames?: string;
};
const AccordionTitle: React.FunctionComponent<AccordionTitleProps> = ({
  children,
  classNames = '',
  ...rest
}) => {
  const { handleOpen } = useContext(AccordionItemContext);

  return (
    <div
      role="presentation"
      className={classnames(titleClassNames.title, classNames)}
      onClick={handleOpen}
      {...rest}
    >
      <div className={titleClassNames.titleWrap}>{children}</div>
      <Icon icon={ICONS.CHEVRON} direction={ICONS_DIRECTIONS.DOWN} color={ICONS_COLORS.DARK} />
    </div>
  );
};

export default AccordionTitle;
