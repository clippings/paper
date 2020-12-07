import { ReactNode } from 'react';
import { DRAWER_POSITIONS } from '../enums/DrawerPositionEnum';
import { DRAWER_DIRECTION } from '../enums/DrawerDirectionEnum';

export type DrawerPropType = {
  children: ReactNode;
  /** The width of the drawer */
  width: number;
  /**
   * The flag that controls, when the drawer should be open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback to be executed when the drawer has to close
   */
  onClose: () => void;
  /**
   * Top offset of the drawer
   *
   * @default 0
   */
  top?: number;
  /**
   * How is the drawer positioned
   *
   * @default DRAWER_POSITIONS.ABSOLUTE
   */
  position?: DRAWER_POSITIONS;
  /**
   * Top offset of the drawer
   *
   * @default 0
   */
  bottom?: number;
  /**
   * On which side the drawer should be opened
   *
   * @default DRAWER_DIRECTION.RIGHT
   */
  openDirection?: DRAWER_DIRECTION;
};
