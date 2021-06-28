import React, { forwardRef, RefObject } from 'react';
import { InputField } from '../InputField/InputField';
import { InputFieldBase } from '@core/interfaces/InputFieldBase';

export const PhoneInput: React.FunctionComponent<InputFieldBase> = forwardRef(
  ({ ...rest }, ref: RefObject<HTMLInputElement>) => {
    return <InputField ref={ref} type="tel" {...rest} />;
  }
);
