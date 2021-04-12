import { makeStyles } from '@material-ui/core/styles';
import { graphite10, graphite120, graphite30 } from '@core/styles/variables';

export const selectStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  select: {
    padding: '14px',
    '&:focus': {
      backgroundColor: graphite10,
    },
  },
  icon: {
    color: graphite120,
    paddingRight: '6px',
    fontSize: '24px',
    width: 'auto',
  },
}));

export const inputStyles = makeStyles(() => ({
  root: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    fontFamily: 'inherit',
    height: '48px',
    borderRadius: '2px',
    backgroundColor: graphite10,
  },
  underline: {
    '&:hover:not(disabled):before': {
      // important is needed to beat them import order
      borderBottom: `2px solid ${graphite30} !important`, //its when you hover and input is not focused
    },
    '&:after': {
      transition: 'none',
      backgroundColor: graphite10,
      borderBottom: `2px solid ${graphite120}`, //when input is focused, Its just for example. Its better to set this one using primary color
    },
    '&:before': {
      borderBottom: '2px solid transparent', // when input is not touched
    },
  },
}));

export const containerStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
  },
}));

export const menuItemStyles = makeStyles(() => ({
  root: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    fontFamily: 'inherit',
    height: '40px',
  },
}));
