import React, { createRef, useEffect } from 'react';
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
  onClose,
  ...rest
}) => {
  const drawerRef = createRef<HTMLDivElement>();

  const onClickOutside = event => {
    if (drawerRef.current !== null && !drawerRef.current.contains(event.target) && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    if (drawerRef.current === null) {
      return;
    }

    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, [drawerRef]);

  return (
    <StyledDrawer
      width={width}
      isOpen={isOpen}
      openDirection={openDirection}
      bottom={bottom}
      top={top}
      className={generateDrawerClassName({ openDirection, ...rest })}
      {...rest}
      ref={drawerRef}
    >
      {children}
    </StyledDrawer>
  );
};
