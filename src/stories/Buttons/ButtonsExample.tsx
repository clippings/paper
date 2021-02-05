import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, CircleButton } from '@paper/components';

import { ButtonPropsType } from '../../components/Buttons/types/ButtonPropsType';

const ButtonRegularExample: FC<ButtonPropsType & { theme: string }> = ({
  theme,
  variant,
  size,
  children,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Button startIcon={startIcon} endIcon={endIcon} variant={variant} size={size} {...rest}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

const CircleButtonExample: FC<ButtonPropsType & { theme: string }> = ({
  theme,
  variant,
  size,
  children,
  ...rest
}) => {
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <CircleButton variant={variant} size={size} {...rest}>
        {children}
      </CircleButton>
    </ThemeProvider>
  );
};

export { ButtonRegularExample, CircleButtonExample };
