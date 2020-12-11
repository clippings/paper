import { ChangeEvent } from 'react';

export const handleChange = (onChange?: (value: string) => void) => (
  e: ChangeEvent<HTMLInputElement>
): void => {
  onChange && onChange(e.target.value);
};
