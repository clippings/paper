import theme from 'styled-theming';

// Primitive theme colors
const graphite120 = { light: '#141414', hm: '#111111' };
const graphite90 = '#525252';
const graphite60 = '#8f8f8f';
const graphite30 = '#cccccc';
const graphite10 = '#f5f5f5';
const white = '#ffffff';

const hmRed = '#D13F21';
const red60 = '#d74b46';
const yellow50 = '#f1b056';
const green30 = '#4aab4a';
const blue50 = '#66c4e0';
const beige10 = '#f3ede9';

export const twitterColor = '#03aaf5';
export const pinterestColor = '#d02621';

// Abstract theme colors
export const darkest = theme('mode', graphite120);
export const darker = theme('mode', { light: graphite90, hm: graphite90 });
export const medium = theme('mode', { light: graphite60, hm: graphite60 });
export const light = theme('mode', { light: graphite30, hm: graphite30 });
export const lightest = theme('mode', { light: graphite10, hm: graphite10 });

export const brandPrimary = theme('mode', { light: graphite120.light, hm: hmRed });
export const brandBackground = theme('mode', { light: beige10, hm: beige10 });
export const onPrimary = theme('mode', { light: white, hm: white });
export const background = theme('mode', { light: white, hm: white });

export const attention = theme('mode', { light: red60, hm: red60 });
export const caution = theme('mode', { light: yellow50, hm: yellow50 });
export const success = theme('mode', { light: green30, hm: green30 });
export const information = theme('mode', { light: blue50, hm: blue50 });
