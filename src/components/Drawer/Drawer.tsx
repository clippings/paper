import React from 'react';
import { DrawerPropType } from './types/DrawerPropType';
import { StyledDrawer } from './styles/DrawerStyles';
import { generateDrawerClassName } from '@core/utils/ClassNameModifierUtil';
import { DRAWER_DIRECTION } from '@paper/enums';

export const Drawer: React.FC<DrawerPropType> = ({
  children,
  width,
  isOpen = false,
  openDirection = DRAWER_DIRECTION.RIGHT,
  bottom = 0,
  top = 0,
  ...rest
}) => (
  <StyledDrawer
    width={width}
    isOpen={isOpen}
    openDirection={openDirection}
    bottom={bottom}
    top={top}
    className={generateDrawerClassName({ openDirection, ...rest })}
    {...rest}
  >
    {children}
  </StyledDrawer>
);
