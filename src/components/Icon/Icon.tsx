import React from 'react';
import { ICONS_SIZE } from './enums/IconsSizeEnum';
import { ICONS_COLOR } from './enums/IconsColorEnum';
import iconsMap from './constants/IconsMap';
import { IconPropsType } from './types/IconPropsType';

export const Icon: React.FunctionComponent<IconPropsType> = ({ color, size, icon, ...rest }) => {
  const buildIconProps: ({
    color: ICONS_COLOR,
    size: ICONS_SIZE,
  }) => {
    fill: ICONS_COLOR;
    width: ICONS_SIZE;
    height: ICONS_SIZE;
  } = ({
    color = ICONS_COLOR.GREY,
    size = ICONS_SIZE.MEDIUM,
  }): {
    fill: ICONS_COLOR;
    width: ICONS_SIZE;
    height: ICONS_SIZE;
  } => ({
    fill: color,
    width: size,
    height: size,
  });

  const pathKey = (color, size, d, icon): number => icon + size + color + d.substring(0, 9);

  return (
    <svg
      {...buildIconProps({ color, size })}
      viewBox="0 0 14 14"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      {iconsMap[icon].map(d => (
        <path d={d} fillRule="evenodd" clipRule="evenodd" key={pathKey(color, size, d, icon)} />
      ))}
    </svg>
  );
};
