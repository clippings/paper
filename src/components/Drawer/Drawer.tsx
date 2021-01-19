import React, { forwardRef, HTMLProps, RefObject } from 'react';
import { DrawerPropType } from './types/DrawerPropType';
import { StyledDrawer } from './styles/DrawerStyles';
import { generateDrawerClassName } from '@core/utils/ClassNameModifierUtil';
import { DRAWER_DIRECTION } from '@paper/enums';

export const Drawer: React.FunctionComponent<
  DrawerPropType & { ref: React.Ref<HTMLDivElement> } & HTMLProps<HTMLDivElement>
> = forwardRef<HTMLDivElement, DrawerPropType>(
  (
    { children, width, isOpen = false, openDirection = DRAWER_DIRECTION.RIGHT, top = 0, ...rest },
    ref: RefObject<HTMLInputElement>
  ) => (
    <StyledDrawer
      width={width}
      isOpen={isOpen}
      openDirection={openDirection}
      top={top}
      className={generateDrawerClassName({ openDirection, ...rest })}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledDrawer>
  )
);
