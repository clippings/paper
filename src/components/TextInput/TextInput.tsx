import React, { ChangeEvent, forwardRef, RefObject } from 'react';
import classNames from '@core/config/ClassNames';
import { TextInputPropsType } from './types/TextInputPropsType';
import { FormGroup } from '../FormGroup/FormGroup';
import { FormError } from '../FormError/FormError';

export const TextInput: React.FunctionComponent<TextInputPropsType> = forwardRef(
  (
    { placeholderText, title = null, onChange = null, error = null, className = '', ...rest },
    ref: RefObject<HTMLInputElement>
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(e.target.value);
    };

    return (
      <FormGroup className={className} hasError={error !== null}>
        {title && <span className={classNames.textInput.labelTitle}>{title}</span>}
        <span className={classNames.textInput.inputContainer}>
          <input
            ref={ref}
            type="text"
            placeholder={placeholderText}
            onChange={handleChange}
            {...rest}
          />
        </span>
        <FormError>{error}</FormError>
      </FormGroup>
    );
  }
);
