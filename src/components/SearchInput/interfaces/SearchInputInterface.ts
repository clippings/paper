export interface SearchInputInterface {
  debounceRate?: number;
  submitOn?: any;
  onChange: (...args: any) => any;
  placeholder: string;
  defaultValue?: string;
}
