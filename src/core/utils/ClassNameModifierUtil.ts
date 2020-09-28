const prefix: string = 'p-';
const formPrefix: string = 'f-';
/**
 *
 * @param {string} element
 * @returns {string}
 */
export const createClassName = (element: string): string => prefix + element;
export const createClassNameModifier = (element: string, modifier: string): string =>
  `${createClassName(element)}__${modifier}`;
/**
 *
 * @param {string} element
 * @returns {string}
 */
export const createFormElementClassName = (element: string): string =>
  createClassName(formPrefix + element);
export const createFormElementClassNameModifier = (element: string, modifier: string): string =>
  createClassNameModifier(formPrefix + element, modifier);
export const createComponentClassName = (component: string, element: string): string =>
  `${prefix + component}-${element}`;
