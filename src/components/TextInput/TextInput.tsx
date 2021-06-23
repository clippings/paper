import React, { forwardRef, RefObject } from 'react';
import { InputFieldBase } from '@core/interfaces/InputFieldBase';
import { InputField } from '../InputField/InputField';

export const TextInput: React.FunctionComponent<InputFieldBase> = forwardRef(
  ({ ...rest }, ref: RefObject<HTMLInputElement>) => {
    return <InputField ref={ref} type="text" {...rest} />;
  }
);
