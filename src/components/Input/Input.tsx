import React, { forwardRef, RefObject } from 'react';
import classNames from '@core/config/ClassNames';
import { InputPropsType } from './types/InputPropsType';
import { handleChange } from '@core/utils/InputUtils';
import classnames from 'classnames';

export const Input: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<InputPropsType> & React.RefAttributes<HTMLInputElement>
> = forwardRef(({ className, onChange, ...rest }, ref: RefObject<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      className={classnames(classNames.textInput.input, className)}
      onChange={handleChange(onChange)}
      {...rest}
    />
  );
});
