import React, { forwardRef, RefObject } from 'react';
import classNames from '@core/config/ClassNames';
import { FieldPropsType } from './types/FieldPropsType';
import { FormGroup } from '../FormGroup/FormGroup';
import { FormError } from '../FormError/FormError';
import { Label } from '../Label/Label';
import classnames from 'classnames';
import { Input } from '../Input/Input';

export const InputField: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<FieldPropsType> & React.RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      id = '',
      placeholderText = '',
      title = null,
      onChange,
      error = null,
      type = 'text',
      className = '',
      ...rest
    },
    ref: RefObject<HTMLInputElement>
  ) => {
    return (
      <FormGroup className={className}>
        {title && <Label htmlFor={id}>{title}</Label>}
        <Input
          {...rest}
          id={id}
          type={type}
          ref={ref}
          className={classnames({
            [classNames.formGroup.hasError]: error !== null,
          })}
          onChange={onChange}
          placeholder={placeholderText}
        />
        {error && <FormError>{error}</FormError>}
      </FormGroup>
    );
  }
);
