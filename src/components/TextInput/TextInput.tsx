import React, { forwardRef, RefObject } from 'react';
import classNames from '@core/config/ClassNames';
import { TextInputPropsType } from './types/TextInputPropsType';
import { FormGroup } from '../FormGroup/FormGroup';
import { FormError } from '../FormError/FormError';
import { Label } from '../Label/Label';
import { handleChange } from '@core/utils/InputUtils';

export const TextInput: React.FunctionComponent<TextInputPropsType> = forwardRef(
  (
    {
      id = undefined,
      placeholderText = '',
      title = null,
      onChange,
      error = null,
      className = '',
      ...rest
    },
    ref: RefObject<HTMLInputElement>
  ) => {
    return (
      <FormGroup className={className} hasError={error !== null}>
        {title && <Label htmlFor={id}>{title}</Label>}
        <input
          id={id}
          ref={ref}
          type="text"
          placeholder={placeholderText}
          className={classNames.textInput.input}
          onChange={handleChange(onChange)}
          {...rest}
        />
        <FormError>{error}</FormError>
      </FormGroup>
    );
  }
);
