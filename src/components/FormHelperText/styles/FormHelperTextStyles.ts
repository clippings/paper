import { makeStyles } from '@material-ui/core/styles';
import { red60 } from '@core/styles/variables';

export const FormHelperTextStyles = makeStyles({
  root: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    fontFamily: 'inherit',
  },
  error: {
    color: `${red60} !important`,
  },
});
