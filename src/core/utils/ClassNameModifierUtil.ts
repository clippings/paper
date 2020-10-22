import classNames from 'classnames';

const prefix: string = 'p-';
const formPrefix: string = 'f-';
const buttonPrefix = 'uni-button'; // TODO: replace with "button" after buttons-refactoring is complete

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
                                size,
                                variant,
                                shape,
                                fullWidth,
                                iconRight,
                              }: {children: string, className: string, size: string, variant: string, shape: string, fullWidth: string, iconRight: string}): string => {
  const classes = classNames(prefix, {
    [`${buttonPrefix}--filled ${prefix}--${variant}`]: variant,
    [`${buttonPrefix}--${size}`]: size,
    [`${buttonPrefix}--${shape}`]: shape,
    [`${buttonPrefix}--full-width`]: fullWidth,
    [`${buttonPrefix}--icon-right`]: iconRight,
    [`${buttonPrefix}--empty`]: !children,
    [className]: className,
  });

  return classes;
};
