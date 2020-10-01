import { ComponentType } from '@paper/core/interfaces/ComponentType';

export type AccordionPropsType = {
  defaultOpened?: number | string | null;
  disabled?: boolean;
} & ComponentType;
