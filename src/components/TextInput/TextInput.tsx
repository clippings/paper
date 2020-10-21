import React, { ChangeEvent } from 'react';
import classNames from '@core/config/ClassNames';
import { TextInputPropsType } from './types/TextInputPropsType';
import { FormGroup } from '../FormGroup/FormGroup';

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
    <FormGroup className={className} hasError={error !== null}>
      {title && <span className={classNames.textInput.labelTitle}>{title}</span>}
      <span className={classNames.textInput.inputContainer}>
        <input type="text" placeholder={placeholderText} onChange={handleChange} {...rest} />
      </span>
      <span className={classNames.textInput.error}>{error}</span>
    </FormGroup>
  );
};
