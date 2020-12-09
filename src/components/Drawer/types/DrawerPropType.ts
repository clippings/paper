import { ReactNode } from 'react';
import { DRAWER_DIRECTION } from '../enums/DrawerDirectionEnum';

export type DrawerPropType = {
  children: ReactNode;
  /** The width of the drawer */
  width: number | string;
  /**
   * The flag that controls, when the drawer should be open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Top offset of the drawer
   *
   * @default 0
   */
  top?: number;
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
