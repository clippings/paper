import theme from 'styled-theming';
import {
  graphite120,
  graphite30,
  graphite60,
  kazamRed,
  white,
} from '../../../core/styles/variables';

export const btnSecondaryBg = graphite120;
export const btnSecondaryBorder = btnSecondaryBg;
export const btnSecondaryColor = white;
export const btnSecondaryBgDisabled = graphite60;

export const brandBtnPrimaryBg = theme('mode', { light: graphite120, kazam: kazamRed });
export const brandBtnPrimaryBorder = brandBtnPrimaryBg;
export const brandBtnPrimaryColor = btnSecondaryColor;
export const brandPrimaryBgDisabled = btnSecondaryBgDisabled;

export const btnTertiaryBg = 'transparent';
export const btnTertiaryBorder = graphite30;
export const btnTertiaryColor = graphite120;
export const btnTertiaryBorderHover = graphite60;
export const btnTertiaryColorDisabled = graphite60;
