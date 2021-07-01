import React, { forwardRef, RefObject } from 'react';
import classNames from '@core/config/ClassNames';
import { TextareaPropsType } from './types/TextareaPropsType';
import classnames from 'classnames';
import { FieldContainer } from '../FieldContainer/FieldContainer';

export const TextareaField: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TextareaPropsType> & React.RefAttributes<HTMLTextAreaElement>
> = forwardRef(
  (
    {
      resizable = false,
      id = '',
      title = null,
      error = null,
      className = '',
      note = '',
      ...rest
    },
    ref: RefObject<HTMLTextAreaElement>
  ) => {
    return (
      <FieldContainer id={id} className={className} title={title} note={note} error={error}>
        <textarea
          ref={ref}
          className={classnames(classNames.textareaField.textarea, {
            [classNames.textareaField.resizable]: resizable,
          })}
          {...rest}
        />
      </FieldContainer>
    );
  }
);
