import React from 'react';
import { debounce } from 'lodash';
import { Icon, ICON } from '@paper';
import '../../assets/scss/search.scss';
import { SearchInputPropsType } from './types/SearchInputPropsType';
import { KEY } from '@core/enums/KeysEnum';
import { SUBMIT_TYPE } from './enums/SubmitTypeEnum';
import classNames from '@core/config/ClassNames';

export const SearchInput: React.FunctionComponent<SearchInputPropsType> = ({
  debounceRate = 0,
  submitOn = SUBMIT_TYPE.KEYUP,
  defaultValue = '',
  onChange,
  placeholder,
}) => {
  const debouncedOnChange = debounce(onChange, debounceRate);

  const onKeyUp = event => {
    if (event.key !== KEY.ENTER && submitOn === SUBMIT_TYPE.ENTER) {
      return;
    }
    debouncedOnChange(event.currentTarget.value);
  };

  return (
    <div className={classNames.searchInput.wrapper}>
      <input
        type="text"
        className={classNames.searchInput.input}
        defaultValue={defaultValue}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
      />
      <Icon icon={ICON.SEARCH} />
    </div>
  );
};
