import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Icon, ICON, ICONS_DIRECTION, ICONS_COLOR, ICONS_SIZE } from '@paper';
import {jsxDecorator} from "storybook-addon-jsx";

const btnStyle = {
  minWidth: '190px',
  background: 'none',
  border: '1px solid black',
  borderRadius: '10px',
  outline: 'none',
  boxShadow: 'none',
  padding: '5px',
  margin: '5px',
};

const backgroundColorMap = {
  [ICONS_COLOR.DARK]: '#FFF',
  [ICONS_COLOR.GREY]: '#FFF',
  [ICONS_COLOR.WHITE]: '#141414',
};
const sizeMap = {
  [ICONS_SIZE.SMALL]: 'Small',
  [ICONS_SIZE.MEDIUM]: 'Medium',
  [ICONS_SIZE.LARGE]: 'Large',
  [ICONS_SIZE.LARGER]: 'Larger',
};

const useIcon = () => {
  const [size, setSize] = useState(ICONS_SIZE.MEDIUM);

  const toggleSize = () => {
    if (size === ICONS_SIZE.SMALL) {
      return setSize(ICONS_SIZE.MEDIUM);
    }

    if (size === ICONS_SIZE.MEDIUM) {
      return setSize(ICONS_SIZE.LARGE);
    }

    if (size === ICONS_SIZE.LARGE) {
      return setSize(ICONS_SIZE.LARGER);
    }

    return setSize(ICONS_SIZE.SMALL);
  };
  const [direction, setDirection] = useState(ICONS_DIRECTION.RIGHT);

  const toggleDirection = () => {
    if (direction === ICONS_DIRECTION.RIGHT) {
      return setDirection(ICONS_DIRECTION.DOWN);
    }
    if (direction === ICONS_DIRECTION.DOWN) {
      return setDirection(ICONS_DIRECTION.LEFT);
    }
    if (direction === ICONS_DIRECTION.LEFT) {
      return setDirection(ICONS_DIRECTION.UP);
    }
    return setDirection(ICONS_DIRECTION.RIGHT);
  };

  return (
    <div>
      <button onClick={toggleSize} type="button" style={btnStyle}>
        Change size current: {sizeMap[size]}
      </button>
      <button onClick={toggleDirection} type="button" style={btnStyle}>
        Change direction current: {direction}
      </button>

      {Object.keys(ICONS_COLOR).map(colorKey => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: backgroundColorMap[ICONS_COLOR[colorKey]],
            color: ICONS_COLOR[colorKey],
            border: '1px solid #OOO',
          }}
          key={colorKey}
        >
          <div style={{ width: '120px' }}> Color {colorKey} :</div>
          {Object.keys(ICON).map(key => (
            <div title={key} style={{ padding: '5px' }} key={key + colorKey}>
              <Icon
                icon={ICON[key]}
                color={ICONS_COLOR[colorKey]}
                size={size}
                direction={direction}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

storiesOf('Icon', module)
  .addDecorator(jsxDecorator)
  .add('Icons', useIcon);
