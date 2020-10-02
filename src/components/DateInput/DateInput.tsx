import React from 'react';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon, ICON } from '@paper';
import classNames from '@core/config/ClassNames';
import { DateInputPropsTypes } from './types/DateInputPropsTypes';

export const DateInput: React.FunctionComponent<DateInputPropsTypes> = ({
  className = '',
  dateFormat = 'dd/MM/yyyy',
  maxDate,
  minDate,
  onChange,
  placeholderText,
  selected,
  disabled = false,
  title = null,
  error = null,
}) => {
  const handleChange = (date: Date): void => {
    if (date) {
      date.setHours(12);
      onChange(date);

      return;
    }

    onChange(date);
  };

  return (
    <div
      className={classnames(
        classNames.dateInput.label,
        classNames.dateInput.datepicker,
        className,
        {
          [classNames.dateInput.error]: error,
        }
      )}
    >
      {title && <span className={classNames.dateInput.labelTitle}>{title}</span>}
      <span className={classNames.dateInput.inputContainer}>
        <DatePicker
          selected={selected}
          dateFormat={dateFormat}
          maxDate={maxDate}
          minDate={minDate}
          onChange={handleChange}
          placeholderText={placeholderText}
          disabled={disabled}
        />
        <Icon icon={ICON.CALENDAR} />
      </span>
      <span className={classNames.dateInput.errorContainer}>{error}</span>
    </div>
  );
};
