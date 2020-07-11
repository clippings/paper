import React, { useState } from 'react';
import classnames from 'classnames';
import {
  createFormElementClassName,
  createFormElementClassNameModifier,
} from '../utils/classNames';
import '../assets/scss/select.scss';
import { Icon, ICONS, ICONS_COLORS, ICONS_DIRECTIONS } from './Icon';
const classNames = {
  wrapper: createFormElementClassName('select'),
  labelWrap: createFormElementClassNameModifier('select', 'label-wrap'),
  label: createFormElementClassNameModifier('select', 'label'),
  dropdown: createFormElementClassNameModifier('select', 'dropdown'),
  dropdownItem: createFormElementClassNameModifier('select', 'dropdown__item'),
  selected: createFormElementClassNameModifier('select', 'dropdown__item-selected'),
};
type SelectProps = {
  options: {
    value?: any | number | string;
    label?: string | React.ReactNode;
  }[];
  selected?: any | number | string;
  placeholder?: string;
  onChange: (...args: any[]) => any;
};
export const Select: React.FunctionComponent<SelectProps> = ({
  options,
  selected,
  placeholder,
  onChange,
}) => {
  const selectedOptions = options.filter(option => option.value === selected);
  const [selectedOption, setSelectedOption] = useState(
    selectedOptions.length > 0 ? selectedOptions[0] : null
  );
  const [isOpen, setIsOpen] = useState(false);
  const onValueChange = option => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };
  return (
    <div
      className={classnames(classNames.wrapper, {
        open: isOpen,
      })}
    >
      <div className={classNames.labelWrap} role="presentation" onClick={() => setIsOpen(!isOpen)}>
        <span className={classNames.label}>
          {selectedOption !== null ? selectedOption.label : placeholder}
        </span>
        <Icon icon={ICONS.CHEVRON} direction={ICONS_DIRECTIONS.DOWN} color={ICONS_COLORS.DARK} />
      </div>
      <ul className={classNames.dropdown}>
        {options.map(option => {
          const selectedClass = option === selectedOption ? classNames.selected : '';
          return (
            <li
              role="presentation"
              className={classnames(classNames.dropdownItem, selectedClass)}
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
Select.defaultProps = {
  placeholder: '',
  selected: null,
};
