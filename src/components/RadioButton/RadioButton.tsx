import React, { forwardRef, RefObject } from 'react';
import { RadioButtonPropType } from './types/RadioButtonPropType';
import { handleChange } from '../../core/utils/InputUtils';

export const RadioButton: React.FunctionComponent<RadioButtonPropType> = forwardRef(
  ({ children = null, className = '', onChange, ...rest }, ref: RefObject<HTMLInputElement>) => {
    return (
      <label className={className}>
        <input type="radio" onChange={handleChange(onChange)} ref={ref} {...rest} />
        {children}
      </label>
    );
  }
);
