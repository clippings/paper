import React, { useRef, useEffect } from 'react';
import classname from 'classnames';
import classNames from '../../core/config/ClassNames';
import {AutocompleteHitInterface} from "@paper/components/Autocomplete/interfaces/AutocompleteHitInterface";

export const AutocompleteHit: React.FunctionComponent<AutocompleteHitInterface> = ({ active, children = null, onClick, scrollTo }) => {
  const ref: any = useRef();

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
