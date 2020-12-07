import { createContext } from 'react';
import { DrawerContextType } from './types/DrawerContextType';

export const DrawerContext = createContext<DrawerContextType>({
  onClose: () => {},
  isOpen: false,
});
