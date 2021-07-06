import React, { forwardRef, RefObject } from 'react';
import classNames from '@core/config/ClassNames';
import { FieldPropsType } from './types/FieldPropsType';
import classnames from 'classnames';
import { Input } from '../Input/Input';
import { FieldContainer } from '../FieldContainer/FieldContainer';

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
      note = '',
      ...rest
    },
    ref: RefObject<HTMLInputElement>
  ) => {
    return (
      <FieldContainer id={id} className={className} title={title} note={note} error={error}>
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
      </FieldContainer>
    );
  }
);
