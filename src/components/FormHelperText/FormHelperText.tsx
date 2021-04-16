import React from 'react';
import { FormHelperText as FormHelperTextMaterial } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { FormHelperTextTypeMap } from '@material-ui/core/FormHelperText/FormHelperText';
import { FormHelperTextStyles } from './styles/FormHelperTextStyles';

export const FormHelperText: OverridableComponent<FormHelperTextTypeMap> = props => {
  const classes = FormHelperTextStyles();
  const { children, ...rest } = props;
  return (
    <FormHelperTextMaterial classes={classes} {...rest}>
      {children}
    </FormHelperTextMaterial>
  );
};
