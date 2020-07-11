import React from 'react';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  createClassName,
  createFormElementClassName,
  createFormElementClassNameModifier,
} from '../utils/classNames';
import { Icon, ICONS } from './Icon';
const classNames = {
  label: createFormElementClassName('label'),
  labelTitle: createFormElementClassName('label-title'),
  inputContainer: createFormElementClassName('input-container'),
  errorContainer: createFormElementClassName('error'),
  error: createClassName('error'),
  datepicker: createFormElementClassNameModifier('label', 'datepicker'),
};
type DateInputProps = {
  className?: string;
  title?: React.ReactChild;
  error?: React.ReactChild;
  dateFormat?: string;
  disabled?: boolean;
  maxDate?: any;
  minDate?: any;
  onChange: (...args: any[]) => any;
  placeholderText: string;
  selected?: any;
};
export const DateInput: React.FunctionComponent<DateInputProps> = ({
  className,
  dateFormat,
  maxDate,
  minDate,
  onChange,
  placeholderText,
  selected,
  disabled,
  title,
  error,
}) => {
  const handleChange = date => {
    if (date) {
      date.setHours(12);
      onChange(date);
      return;
    }
    onChange(date);
  };
  return (
    <div
      className={classnames(classNames.label, classNames.datepicker, className, {
        [classNames.error]: error,
      })}
    >
      {title && <span className={classNames.labelTitle}>{title}</span>}
      <span className={classNames.inputContainer}>
        <DatePicker
          selected={selected}
          dateFormat={dateFormat}
          maxDate={maxDate}
          minDate={minDate}
          onChange={handleChange}
          placeholderText={placeholderText}
          disabled={disabled}
        />
        <Icon icon={ICONS.CALENDAR} />
      </span>
      <span className={classNames.errorContainer}>{error}</span>
    </div>
  );
};
DateInput.defaultProps = {
  className: '',
  disabled: false,
  dateFormat: 'dd/MM/yyyy',
};
