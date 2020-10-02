import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import '@paper/assets/scss/select.scss';
import { ICON, ICONS_COLOR } from '@paper/enums';
import { Icon } from '@paper/components';
import { useDropdown } from '@paper/utils';
import classNames from '@core/config/ClassNames';
import { SelectPropsType } from './types/SelectPropsType';

export const Select: React.FunctionComponent<SelectPropsType> = ({
  options,
  selected = null,
  placeholder = '',
  onChange,
}) => {
  const selectedOptions = options.filter(option => option.value === selected);

  const [selectedOption, setSelectedOption] = useState(
    selectedOptions.length > 0 ? selectedOptions[0] : null
  );

  const ref = useRef<HTMLDivElement | null>(null);
  const { isOpen, handleToggle, handleClose } = useDropdown(ref);

  const onValueChange = option => {
    setSelectedOption(option);
    onChange(option.value);
    handleClose();
  };

  return (
    <div
      className={classnames(classNames.select.wrapper, {
        open: isOpen,
      })}
      ref={ref}
    >
      <div className={classNames.select.labelWrap} role="presentation" onClick={handleToggle}>
        <span
          className={
            selectedOption === null ? classNames.select.labelDefault : classNames.select.label
          }
        >
          {selectedOption !== null ? selectedOption.label : placeholder}
        </span>
        <Icon
          icon={ICON.CHEVRON_DOWN}
          color={ICONS_COLOR.DARK}
          className={classNames.select.icon}
        />
      </div>
      <ul className={classNames.select.dropdown}>
        {options.map(option => {
          const selectedClass = option === selectedOption ? classNames.select.selected : '';
          return (
            <li
              role="presentation"
              className={classnames(classNames.select.dropdownItem, selectedClass)}
              onClick={() => onValueChange(option)}
              key={option.value}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
