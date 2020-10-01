export type SearchInputPropsType = {
  debounceRate?: number;
  submitOn?: SUBMIT_TYPE;
  onChange: (...args: any) => any;
  placeholder: string;
  defaultValue?: string;
};
