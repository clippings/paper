import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { Icon, ICON, ICONS_COLOR } from '@paper';
import '../../assets/scss/autocomplete.scss';
import { AutocompleteHit } from './AutocompleteHit';
import classNames from '../../core/config/ClassNames';
import { KEY } from '@paper/core/enums/KeysEnum';
import { AutocompleteInputInterface } from './interfaces/AutocompleteInputInterface';

export const AutocompleteInput: React.FunctionComponent<AutocompleteInputInterface> = ({
  onChange = () => {},
  defaultValue = '',
  placeholder,
  onSearch,
  hits = [],
  children = null,
  min = 0,
  className = '',
}) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [hitsVisibility, setHitsVisibility] = useState<boolean>(false);
  const ref: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const scrollToElement = (element: HTMLElement): void => {
    ref.current.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  };

  const onSearchLimited = (searched: string): void => {
    if (searched.length < min) {
      return;
    }

    onSearch(searched);
  };

  const onClick = (itemValue: { label: string }) => {
    setValue(itemValue.label);
    onChange(itemValue.label);
  };

  const onInputChange = event => {
    setValue(event.currentTarget.value);
  };

  const clearSearch = (): void => {
    setValue('');
    onChange('');
    setHitsVisibility(false);
  };

  const onFocus = (): void => setHitsVisibility(true);

  const onBlur = (): void => {
    setTimeout(() => {
      setHitsVisibility(false);
    }, 200);
  };

  const findElementIndex = (hits, search) => hits.findIndex(hit => hit.label === search);

  const onInputKeyUp = event => {
    const index = findElementIndex(hits, value);
    setHitsVisibility(true);

    switch (event.key) {
      case KEY.ESCAPE:
        setHitsVisibility(false);
        break;
      case KEY.ENTER:
        onChange(event.currentTarget.value);
        setHitsVisibility(false);
        break;
      case KEY.UP:
        setValue(index > 0 && index ? hits[index - 1].label : hits[hits.length - 1].label);
        break;
      case KEY.DOWN:
        setValue(index > -1 && hits.length > index + 1 ? hits[index + 1].label : hits[0].label);
        break;
      default:
        onSearchLimited(event.currentTarget.value);
        break;
    }
  };

  return (
    <div className={classnames(classNames.autocompleteInput.wrapper, className)}>
      <div className={classNames.autocompleteInput.inputWrapper}>
        <input
          type="text"
          className={classNames.autocompleteInput.input}
          onFocus={onFocus}
          onKeyUp={onInputKeyUp}
          onChange={onInputChange}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
        />
        <Icon icon={ICON.SEARCH} className={classNames.autocompleteInput.icon} />
        {value.trim().length > 0 && (
          <Icon
            icon={ICON.CLOSE}
            color={ICONS_COLOR.DARK}
            className={classNames.autocompleteInput.closeIcon}
            onClick={clearSearch}
          />
        )}
      </div>
      {hitsVisibility && hits.length > 0 && (
        <div className={classNames.autocompleteInput.hits} ref={ref}>
          {hits.map(hit => {
            const active = value === hit.label;
            return (
              <AutocompleteHit
                key={hit.label}
                active={active}
                scrollTo={scrollToElement}
                onClick={() => onClick(hit)}
              >
                {children !== null ? children(hit, active) : hit.label}
              </AutocompleteHit>
            );
          })}
        </div>
      )}
    </div>
  );
};
