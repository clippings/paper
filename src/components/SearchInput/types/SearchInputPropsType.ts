export type SearchInputPropsType = {
  debounceRate?: number;
  submitOn?: SUBMIT_TYPE;
  onChange: (value: string) => any;
  placeholder: string;
  defaultValue?: string;
};
