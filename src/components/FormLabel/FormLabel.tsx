import React from 'react';
import { FormLabel as FormLabelMaterial } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { FormLabelTypeMap } from '@material-ui/core/FormLabel/FormLabel';
import { FormLabelStyles } from './styles/FormLabelStyles';

export const FormLabel: OverridableComponent<FormLabelTypeMap> = props => {
  const classes = FormLabelStyles();
  const { children, ...rest } = props;
  return (
    <FormLabelMaterial classes={classes} {...rest}>
      {children}
    </FormLabelMaterial>
  );
};
