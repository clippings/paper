import React from 'react';
import { MenuItem, Select as MaterialSelect, Input, Container } from '@material-ui/core';
import { FormHelperText } from '../FormHelperText/FormHelperText';
import { KeyboardArrowDown } from '@material-ui/icons';
import { FormLabel } from '../FormLabel/FormLabel';
import { SelectPropsType } from './types/SelectPropsType';
import { selectStyles, inputStyles, containerStyles, menuItemStyles } from './styles/SelectStyles';

export const Select: React.FunctionComponent<SelectPropsType> = ({
  options,
  label,
  name,
  error,
  required,
  ...rest
}) => {
  const selectClasses = selectStyles();
  const inputClasses = inputStyles();
  const containerClasses = containerStyles();
  const menuItemClasses = menuItemStyles();

  return (
    <Container classes={containerClasses}>
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <MaterialSelect
        classes={selectClasses}
        IconComponent={KeyboardArrowDown}
        input={<Input classes={inputClasses} />}
        defaultValue=""
        name={name}
        error={!!error}
        {...rest}
      >
        {options.map(({ label, value }) => (
          <MenuItem disableRipple classes={menuItemClasses} value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </MaterialSelect>
      {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </Container>
  );
};
