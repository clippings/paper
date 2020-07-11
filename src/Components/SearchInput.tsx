import React from 'react';
import { debounce } from 'lodash';
import {
  createFormElementClassName,
  createFormElementClassNameModifier,
} from '../utils/classNames';
import { Icon, ICONS } from './Icon';
import '../assets/scss/search.scss';
export const SUBMIT_TYPES = {
  ENTER: 'enter',
  KEYUP: 'keyup',
};
const ENTER_KEY = 'Enter';
const classNames = {
  wrapper: createFormElementClassName('search'),
  input: createFormElementClassNameModifier('search', 'input'),
};
type SearchInputProps = {
  debounceRate?: number;
  submitOn?: any;
  onChange: (...args: any[]) => any;
  placeholder: string;
  defaultValue?: string;
};
export const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  debounceRate,
  submitOn,
  defaultValue,
  onChange,
  placeholder,
}) => {
  const debouncedOnChange = debounce(onChange, debounceRate);
  const onKeyUp = event => {
    if (event.key !== ENTER_KEY && submitOn === SUBMIT_TYPES.ENTER) {
      return;
    }
    debouncedOnChange(event.currentTarget.value);
  };
  return (
    <div className={classNames.wrapper}>
      <input
        type="text"
        className={classNames.input}
        defaultValue={defaultValue}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
      />
      <Icon icon={ICONS.SEARCH} />
    </div>
  );
};
SearchInput.defaultProps = {
  debounceRate: 0,
  defaultValue: '',
  submitOn: SUBMIT_TYPES.KEYUP,
};
