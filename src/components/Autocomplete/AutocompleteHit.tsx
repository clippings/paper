import React, { useRef, useEffect } from 'react';
import classname from 'classnames';
import classNames from '@core/config/ClassNames';
import { AutocompleteHitPropsType } from './types/AutocompleteHitPropsType';

export const AutocompleteHit: React.FunctionComponent<AutocompleteHitPropsType> = ({
  active,
  children = null,
  onClick,
  scrollTo,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (active && ref.current !== null) {
      scrollTo(ref.current);
    }
  }, [active]);

  return (
    <div
      role="presentation"
      ref={ref}
      className={classname(classNames.autocompleteHit.hit, {
        [classNames.autocompleteHit.active]: active,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
