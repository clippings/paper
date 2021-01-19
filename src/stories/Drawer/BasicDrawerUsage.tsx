import React, { FC, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from '@paper/components';
import { BUTTON_VARIANT } from '../../components/Buttons/enums/ButtonVariantEnum';
import { Drawer } from '../../components/Drawer/Drawer';
import { DrawerPropType } from '../../components/Drawer/types/DrawerPropType';
import { useDropdown } from '../../index.utils';

const BasicDrawerUsageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  overflow: hidden;
`;
const BasicDrawerUsage: FC<DrawerPropType & { theme: string }> = ({ theme, ...rest }) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const { handleClose, handleOpen, isOpen } = useDropdown(selectRef);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <BasicDrawerUsageStyled>
        <Button variant={BUTTON_VARIANT.PRIMARY} onClick={handleOpen}>
          Open drawer
        </Button>
        <Drawer {...rest} isOpen={isOpen} ref={selectRef} style={{ background: '#eee', bottom: 0 }}>
          Simple drawer content
          <div>
            <Button variant={BUTTON_VARIANT.PRIMARY} onClick={handleClose}>
              Close drawer
            </Button>
          </div>
        </Drawer>
      </BasicDrawerUsageStyled>
    </ThemeProvider>
  );
};

export default BasicDrawerUsage;
