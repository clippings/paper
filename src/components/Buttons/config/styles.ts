import { generateButtonClassName } from '../../../core/utils/ClassNameModifierUtil';

export const PrimaryButtonStyle: string = generateButtonClassName({ variant: 'primary' });
export const PrimaryBigButtonStyle: string = generateButtonClassName({ variant: 'primary', size: 'big' });

export const DefaultButtonStyle: string = generateButtonClassName({ variant: 'default' });
export const DefaultBigButtonStyle: string = generateButtonClassName({ variant: 'default', size: 'big' });
