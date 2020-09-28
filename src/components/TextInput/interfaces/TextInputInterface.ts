export interface TextInputInterface {
  placeholderText: string;
  title: string | number;
  error:  string | number;
  onChange: Function;
  className?: string;
}
