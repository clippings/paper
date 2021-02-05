import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { pinterestColor, twitterColor } from '@core/styles/variables';
import { ButtonStylePropsType } from '../types/ButtonStylePropsType';
import {
  brandBtnPrimaryBg,
  brandBtnPrimaryBorder,
  brandBtnPrimaryColor,
  btnSecondaryBg,
  btnSecondaryBorder,
  btnSecondaryColor,
  btnTertiaryBg,
  btnTertiaryBorder,
  btnTertiaryBorderHover,
  btnTertiaryColor,
} from './variables';

const btnFontSize: string = '14px';
const buttonPrefix: string = 'p-button';

const buttonVariationColors = {
  primary: {
    background: brandBtnPrimaryBg,
    border: brandBtnPrimaryBorder,
    color: brandBtnPrimaryColor,
  },
  secondary: {
    background: btnSecondaryBg,
    border: btnSecondaryBorder,
    color: btnSecondaryColor,
  },
  tertiary: {
    background: btnTertiaryBg,
    border: btnTertiaryBorder,
    color: btnTertiaryColor,
    hover: {
      border: btnTertiaryBorderHover,
    },
  },
};

const buttonSizeStyles = {
  default: css`
    height: 40px;
    max-height: 40px;
    padding: 0 20px 1px 20px;
    line-height: ${btnFontSize};
  `,
  small: css`
    height: 32px;
    max-height: 32px;
    padding: 0 10px 0.5px 10px;
    line-height: ${btnFontSize};
  `,
  big: css`
    height: 48px;
    max-height: 48px;
    padding: 0 30px 1px 30px;
    line-height: ${btnFontSize};
  `,
};

const circleButtonSizeStyles = {
  default: css`
    height: 40px;
    width: 40px;
  `,
  small: css`
    height: 32px;
    width: 32px;
  `,
  big: css`
    height: 48px;
    width: 48px;
  `,
};

// Default button css extension
const filledExtension = (size: string): FlattenSimpleInterpolation => {
  return css`
    text-align: center;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    ${buttonSizeStyles[size]}

    &.${buttonPrefix}--circle {
      padding: 0 0;
    }
  `;
};

// This generates css for the color variations that you can pass to the component
const colorVariationExtension = (color: string): FlattenSimpleInterpolation => {
  const hover = buttonVariationColors[color]['hover'];

  return css`
    background-color: ${buttonVariationColors[color]['background']};
    color: ${buttonVariationColors[color]['color']};
    svg {
      fill: ${buttonVariationColors[color]['color']};
    }
    border-color: ${buttonVariationColors[color]['border']};
    &:not([disabled]) {
      &:visited {
        border-color: ${buttonVariationColors[color]['border']} !important;
      }
    }
    &:hover,
      &:active,
      &.active {
        ${
          hover
            ? css`
                opacity: 1;
                background-color: ${hover['background']};
                color: ${hover['color']};
                svg {
                  fill: ${hover['color']};
                }
                border-color: ${hover['border']};
              `
            : ''
        }
      }
    }
  `;
};

export const StyledButton = styled.button<ButtonStylePropsType>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  background: none;
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: ${btnFontSize};
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s;
  * {
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
  &:active,
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  &[disabled] {
    opacity: 0.2;
    cursor: default;
  }
  
  &.${buttonPrefix}--filled {
    ${props => filledExtension(props.size)}
    ${props => props.variant && colorVariationExtension(props.variant)}
  }
  
  &.${buttonPrefix}--empty:before {
    margin-right: 0;
  }
  
  &.${buttonPrefix}--full-width {
    width: 100%;
  }

  &.button-twitter,
  &.button-pinterest {
    ${props => filledExtension(props.size)}
    ${props => props.variant && colorVariationExtension(props.variant)}
  }
  
  &.button-twitter {
    background: ${twitterColor};
    border-color: ${twitterColor};
  }

  &.button-pinterest {
    background: ${pinterestColor};
    border-color: ${pinterestColor};
  }
}
`;

// Extended Styled Button styles
export const StyledCircleButton = styled(StyledButton)`
  &.${buttonPrefix}--circle {
    padding: 0 0;
    border-radius: 50%;
    overflow: hidden;
    ${props => circleButtonSizeStyles[props.size]}
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    padding: 0 0;
  }
`;

export const StyledButtonEndIcon = styled.span`
  display: flex;
  margin-left: 6px;
`;

export const StyledButtonStartIcon = styled.span`
  display: flex;
  margin-right: 6px;
`;
