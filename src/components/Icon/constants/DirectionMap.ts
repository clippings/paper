import { ICONS_DIRECTION } from '../enums/IconsDirectionEnum';

const directionMap = {
  [ICONS_DIRECTION.UP]: '-90deg',
  [ICONS_DIRECTION.RIGHT]: '0deg',
  [ICONS_DIRECTION.DOWN]: '90deg',
  [ICONS_DIRECTION.LEFT]: '180deg',
};

export default directionMap;
