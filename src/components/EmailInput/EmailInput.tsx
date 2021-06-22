import React, { forwardRef, RefObject } from 'react';
import { EmailInputPropsType } from './types/EmailInputPropsType';
import { InputField } from '../InputField/InputField';

export const EmailInput: React.FunctionComponent<EmailInputPropsType> = forwardRef(
  ({ ...rest }, ref: RefObject<HTMLInputElement>) => {
    return <InputField ref={ref} type="email" {...rest} />;
  }
);
