export type TextInputPropsType = {
  id?: string;
  placeholderText: string;
  title: string | number;
  error: string | number;
  onChange?: (value: string) => void;
  className?: string;
};
