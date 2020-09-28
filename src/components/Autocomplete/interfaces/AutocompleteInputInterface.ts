export interface AutocompleteInputInterface {
  onChange?: Function;
  onSearch: Function;
  placeholder: string;
  defaultValue?: string;
  min?: number;
  hits?: Array<{
    label: string;
  }>
  children?: Function;
  className?: string;
  debounceRate?: number;
}
