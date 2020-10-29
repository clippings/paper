import theme from 'styled-theming';

// Primitive light theme colors
const graphite120 = '#141414';
const graphite90 = '#525252';
const graphite60 = '#8f8f8f';
const graphite30 = '#cccccc';
const graphite10 = '#f5f5f5';
export const white = '#ffffff';

const red60 = '#d74b46';
const yellow50 = '#f1b056';
const green30 = '#4aab4a';
const blue50 = '#66c4e0';
const beige10 = '#f3ede9';

export const twitterColor = '#03aaf5';
export const pinterestColor = '#d02621';

// Abstract light theme colors
export const brandPrimary = theme('mode', { light: graphite120 });
export const darkest = theme('mode', { light: graphite120 });
export const darker = theme('mode', { light: graphite90 });
export const medium = theme('mode', { light: graphite60 });
export const light = theme('mode', { light: graphite30 });
export const lightest = theme('mode', { light: graphite10 });

export const attention = theme('mode', { light: red60 });
export const caution = theme('mode', { light: yellow50 });
export const success = theme('mode', { light: green30 });
export const information = theme('mode', { light: blue50 });
export const brandBackground = theme('mode', { light: beige10 });
