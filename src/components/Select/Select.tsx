import React from 'react';
import '@paper/assets/scss/select.scss';
import { SelectPropsType } from './types/SelectPropsType';
import {
  MenuItem,
  Select as MaterialSelect,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

export const Select: React.FunctionComponent<SelectPropsType> = ({
  options,
  label,
  name,
  error,
  ...rest
}) => {
  return (
    <FormControl error={!!error}>
      {label && <InputLabel shrink>{label}</InputLabel>}
      <MaterialSelect name={name} {...rest}>
        {options.map(({ label, value }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </MaterialSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
