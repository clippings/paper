import React from 'react';
import { DrawerPropType } from './types/DrawerPropType';
import { StyledDrawer } from './styles/DrawerStyles';
import { DrawerContext } from './DrawerContext';
import * as classNames from 'classnames';
import { generateDrawerClassName } from '../../core/utils/ClassNameModifierUtil';
import { DRAWER_POSITIONS } from './enums/DrawerPositionEnum';
import { DRAWER_DIRECTION } from './enums/DrawerDirectionEnum';

export const Drawer: React.FC<DrawerPropType> = ({
  children,
  onClose,
  width,
  isOpen = false,
  position = DRAWER_POSITIONS.ABSOLUTE,
  openDirection = DRAWER_DIRECTION.RIGHT,
  bottom = 0,
  top = 0,
  ...rest
}) => {
  return (
    <DrawerContext.Provider value={{ isOpen, onClose }}>
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
    </DrawerContext.Provider>
  );
};
