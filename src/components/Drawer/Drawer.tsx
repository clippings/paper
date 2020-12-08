import React from 'react';
import { DrawerPropType } from './types/DrawerPropType';
import { StyledDrawer } from './styles/DrawerStyles';
import { generateDrawerClassName } from '@core/utils/ClassNameModifierUtil';
import { DRAWER_POSITIONS } from '@paper/enums';
import { DRAWER_DIRECTION } from '@paper/enums';

export const Drawer: React.FC<DrawerPropType> = ({
  children,
  width,
  isOpen = false,
  position = DRAWER_POSITIONS.ABSOLUTE,
  openDirection = DRAWER_DIRECTION.RIGHT,
  bottom = 0,
  top = 0,
  ...rest
}) => {
  return (
    <StyledDrawer
      width={width}
      isOpen={isOpen}
      position={position}
      openDirection={openDirection}
      bottom={bottom}
      top={top}
      className={generateDrawerClassName({ position, openDirection, ...rest })}
      {...rest}
    >
      {children}
    </StyledDrawer>
  );
};
