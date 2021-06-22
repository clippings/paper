import React, { forwardRef, RefObject } from 'react';
import { TextInputPropsType } from './types/TextInputPropsType';
import { InputField } from '../InputField/InputField';

export const TextInput: React.FunctionComponent<TextInputPropsType> = forwardRef(
  ({ ...rest }, ref: RefObject<HTMLInputElement>) => {
    return <InputField ref={ref} type="text" {...rest} />;
  }
);
