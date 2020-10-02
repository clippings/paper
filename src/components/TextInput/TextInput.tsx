import React, { ChangeEvent } from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { TextInputPropsType } from './types/TextInputPropsType';

export const TextInput: React.FunctionComponent<TextInputPropsType> = ({
  placeholderText,
  title = null,
  onChange,
  error = null,
  className = '',
  ...rest
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value);

  return (
    <div
      className={classnames(classNames.textInput.label, className, {
        [classNames.textInput.error]: error,
      })}
    >
      {title && <span className={classNames.textInput.labelTitle}>{title}</span>}
      <span className={classNames.textInput.inputContainer}>
        <input type="text" placeholder={placeholderText} onChange={handleChange} {...rest} />
      </span>
      <span className={classNames.textInput.errorContainer}>{error}</span>
    </div>
  );
};
