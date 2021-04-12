import { createMuiTheme } from '@material-ui/core/styles';

import {
  graphite120,
  graphite60,
  graphite90,
  graphite10,
  graphite30,
  red60,
  white,
} from '../core/styles/variables';


declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    tertiary?: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: graphite120,
      light: graphite60,
      dark: graphite90,
      contrastText: white,
    },
    error: {
      main: red60,
    },
    tertiary: {
      main: red60,
      light: red60,
      dark: red60,
      contrastText: graphite120,
    }
  },
  overrides: {
    MuiInput: {
      root: {
        height: '48px',
        borderRadius: '2px',
        fontSize: '14px',
        lineHeight: '20px',
      },
      underline: {
        backgroundColor: graphite10,
        '&:hover:not($disabled):before': {
          borderBottom: `2px solid ${graphite30}`, //its when you hover and input is not focused
        },
        '&:after': {
          backgroundColor: graphite10,
          borderBottom: `2px solid ${graphite120}`, //when input is focused, Its just for example. Its better to set this one using primary color
        },
        '&:before': {
          borderBottom: '2px solid transparent', // when input is not touched
        },
      },
    },
  },
});
