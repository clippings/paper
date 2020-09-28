import React from 'react';
import directionMap from './constants/DirectionMap';
import { ICONS_DIRECTION } from './enums/IconsDirectionEnum';
import { ICONS_SIZE } from './enums/IconsSizeEnum';
import { ICONS_COLOR } from './enums/IconsColorEnum';
import iconsMap from './constants/IconsMap';
import { IconInterface } from './interfaces/IconInterface';

export const Icon: React.FunctionComponent<IconInterface> = ({
  color,
  size,
  direction,
  icon,
  ...rest
}) => {
  const buildIconProps: any = ({
    color = ICONS_COLOR.GREY,
    size = ICONS_SIZE.MEDIUM,
    direction = ICONS_DIRECTION.RIGHT,
  }): {
    fill: ICONS_COLOR;
    width: ICONS_SIZE;
    height: ICONS_SIZE;
    style: { transform: string };
  } => ({
    fill: color,
    width: size,
    height: size,
    style: { transform: `rotate(${directionMap[direction] || 0})` },
  });

  const pathKey = (color, size, d, icon): number => icon + size + color + d.substring(0, 9);

  return (
    <svg
      {...buildIconProps({ color, size, direction })}
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
