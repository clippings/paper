import { Icon, ICONS, ICONS_DIRECTIONS, ICONS_COLORS, ICONS_SIZES } from'../../';
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

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
  [ICONS_COLORS.DARK]: '#FFF',
  [ICONS_COLORS.GREY]: '#FFF',
  [ICONS_COLORS.WHITE]: '#141414',
};
const sizeMap = {
  [ICONS_SIZES.SMALL]: 'Small',
  [ICONS_SIZES.MEDIUM]: 'Medium',
  [ICONS_SIZES.LARGE]: 'Large',
};

const useIcon = () => {
  const [size, setSize] = useState(ICONS_SIZES.MEDIUM);

  const toggleSize = () => {
    if (size === ICONS_SIZES.SMALL) {
      return setSize(ICONS_SIZES.MEDIUM);
    }
    if (size === ICONS_SIZES.MEDIUM) {
      return setSize(ICONS_SIZES.LARGE);
    }
    return setSize(ICONS_SIZES.SMALL);
  };
  const [direction, setDirection] = useState(ICONS_DIRECTIONS.RIGHT);

  const toggleDirection = () => {
    if (direction === ICONS_DIRECTIONS.RIGHT) {
      return setDirection(ICONS_DIRECTIONS.DOWN);
    }
    if (direction === ICONS_DIRECTIONS.DOWN) {
      return setDirection(ICONS_DIRECTIONS.LEFT);
    }
    if (direction === ICONS_DIRECTIONS.LEFT) {
      return setDirection(ICONS_DIRECTIONS.UP);
    }
    return setDirection(ICONS_DIRECTIONS.RIGHT);
  };

  return (
    <div>
      <button onClick={toggleSize} type="button" style={btnStyle}>
        Change size current: {sizeMap[size]}
      </button>
      <button onClick={toggleDirection} type="button" style={btnStyle}>
        Change direction current: {direction}
      </button>

      {Object.keys(ICONS_COLORS).map(colorKey => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: backgroundColorMap[ICONS_COLORS[colorKey]],
            color: ICONS_COLORS[colorKey],
            border: '1px solid #OOO',
          }}
          key={colorKey}
        >
          <div style={{ width: '120px' }}> Color {colorKey} :</div>
          {Object.keys(ICONS).map(key => (
            <div title={key} style={{ padding: '5px' }} key={key + colorKey}>
              <Icon
                icon={ICONS[key]}
                color={ICONS_COLORS[colorKey]}
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

storiesOf('Paper/Components', module).add('Icons', useIcon).addDecorator(jsxDecorator);
