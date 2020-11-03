import theme from 'styled-theming';

// Primitive theme colors
const graphite120 = { light: '#141414', kazam: '#111111' };
const graphite90 = '#525252';
const graphite60 = '#8f8f8f';
const graphite30 = '#cccccc';
const graphite10 = '#f5f5f5';
const white = '#ffffff';

const kazamRed = '#D13F21';
const red60 = '#d74b46';
const yellow50 = '#f1b056';
const green30 = '#4aab4a';
const blue50 = '#66c4e0';
const beige10 = '#f3ede9';

export const twitterColor = '#03aaf5';
export const pinterestColor = '#d02621';

// Abstract theme colors
export const darkest = theme('mode', graphite120);
export const darker = theme('mode', { light: graphite90, kazam: graphite90 });
export const medium = theme('mode', { light: graphite60, kazam: graphite60 });
export const light = theme('mode', { light: graphite30, kazam: graphite30 });
export const lightest = theme('mode', { light: graphite10, kazam: graphite10 });

export const brandBackground = theme('mode', { light: beige10, kazam: beige10 });
export const onPrimary = theme('mode', { light: white, kazam: white });
export const background = theme('mode', { light: white, kazam: white });

export const brandPrimary = theme('mode', { light: graphite120.light });
export const btnPrimary = theme('mode', { light: graphite120.light, kazam: kazamRed });

export const attention = theme('mode', { light: red60, kazam: red60 });
export const caution = theme('mode', { light: yellow50, kazam: yellow50 });
export const success = theme('mode', { light: green30, kazam: green30 });
export const information = theme('mode', { light: blue50, kazam: blue50 });
