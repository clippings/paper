import { makeStyles } from '@material-ui/core/styles';
import { graphite120, graphite60 } from '@core/styles/variables';

export const FormLabelStyles = makeStyles(() => ({
  root: {
    padding: '4px 0',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    color: graphite120,
    fontFamily: 'inherit',
    margin: 0,
  },
  asterisk: {
    color: graphite60,
  },
  focused: {
    color: graphite60,
  },
  error: {
    color: graphite60,
  },
}));
