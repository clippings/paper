import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from '@paper/components';
import { BUTTON_VARIANT } from '../../components/Buttons/enums/ButtonVariantEnum';
import { Drawer } from '../../components/Drawer/Drawer';
import { DrawerContext } from '../../components/Drawer/DrawerContext';
import { DrawerPropType } from '../../components/Drawer/types/DrawerPropType';

const BasicDrawerUsageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  overflow: hidden;
`;
const BasicDrawerUsage: FC<DrawerPropType & { theme: string }> = ({ theme, ...rest }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <BasicDrawerUsageStyled>
        <Button variant={BUTTON_VARIANT.PRIMARY} onClick={() => setIsOpen(true)}>
          Open drawer
        </Button>
        <Drawer {...rest} onClose={() => setIsOpen(false)} isOpen={isOpen}>
          Simple drawer content
          <DrawerContext.Consumer>
            {({ onClose }) => (
              <div>
                <Button variant={BUTTON_VARIANT.PRIMARY} onClick={() => onClose()}>
                  Close drawer
                </Button>
              </div>
            )}
          </DrawerContext.Consumer>
        </Drawer>
      </BasicDrawerUsageStyled>
    </ThemeProvider>
  );
};

export default BasicDrawerUsage;
