import classNames from 'classnames';
import React from 'react';
import { DRAWER_DIRECTION } from '../../components/Drawer/enums/DrawerDirectionEnum';
import { DRAWER_POSITIONS } from '../../components/Drawer/enums/DrawerPositionEnum';

const prefix: string = 'p-';
const formPrefix: string = 'f-';
const buttonPrefix: string = 'p-button';

/**
 * @param {string} element
 * @returns {string}
 */
export const createClassName = (element: string): string => prefix + element;

/**
 * @param {string} component
 * @param {string} element
 * @returns {string}
 */
export const createComponentClassName = (component: string, element: string): string =>
  `${prefix + component}-${element}`;

/**
 * @param {string} element
 * @param {string} modifier
 * @returns {string}
 */
export const createClassNameModifier = (element: string, modifier: string): string =>
  `${createClassName(element)}__${modifier}`;

/**
 * @param {string} component
 * @param {string} element
 * @param {string} modifier
 * @returns {string}
 */
export const createComponentClassNameModifier = (
  component: string,
  element: string,
  modifier: string
): string => `${createComponentClassName(component, element)}__${modifier}`;

/**
 * @param {string} element
 * @returns {string}
 */
export const createFormElementClassName = (element: string): string =>
  createClassName(formPrefix + element);

/**
 * @param {string} element
 * @param {string} modifier
 * @returns {string}
 */
export const createFormElementClassNameModifier = (element: string, modifier: string): string =>
  `${createClassName(formPrefix + element)}__${modifier}`;

export const generateButtonClassName = ({
  children,
  className,
  variant,
  shape,
  fullWidth,
}: {
  children?: React.ReactNode;
  className?: any;
  variant?: string;
  shape?: string;
  fullWidth?: boolean;
}): string => {
  const classes = classNames(buttonPrefix, {
    [`${buttonPrefix}--filled`]: variant,
    [`${buttonPrefix}--${shape}`]: shape,
    [`${buttonPrefix}--full-width`]: fullWidth,
    [`${buttonPrefix}--empty`]: !children,
    [className]: className,
  });

  return classes;
};

export const generateDrawerClassName = ({
  openDirection,
  position,
  className,
}: {
  openDirection: DRAWER_DIRECTION;
  position: DRAWER_POSITIONS;
  className?: any;
}): string => {
  const baseClass = createClassName('drawer');

  return classNames(
    baseClass,
    `${baseClass}--${openDirection}`,
    `${baseClass}--${position}`,
    className
  );
};
