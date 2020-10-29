import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import figmaDecorator from 'storybook-addon-figma';
import { Button, CircleButton, Icon } from '@paper/components';
import { BUTTON_SIZE, BUTTON_VARIANT, ICON, ICONS_COLOR, ICONS_SIZE } from '@paper/enums';

import '../stories.scss';

import componentInfo from './componentInfo.md';
import iconsNotes from './iconsInfo.md';
import { ThemeProvider } from 'styled-components';

const buttonsFigma = figmaDecorator({
  url: 'https://www.figma.com/file/9yrktrewqLhb62TIO49Htg/Web-UI-Kit?node-id=521%3A0',
});

const primBtn = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.PRIMARY}>I am primary</Button>
      <Button variant={BUTTON_VARIANT.PRIMARY}>I am primary too</Button>
    </div>
  </ThemeProvider>
);

const defBtn = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.DEFAULT}>I am default</Button>
      <Button variant={BUTTON_VARIANT.DEFAULT}>I am default too</Button>
    </div>
  </ThemeProvider>
);

const circlePrimary = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>
  </ThemeProvider>
);
const circleDefault = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <CircleButton variant={BUTTON_VARIANT.DEFAULT}>?</CircleButton>
  </ThemeProvider>
);
const circleWithIcon = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <CircleButton variant={BUTTON_VARIANT.DEFAULT}>
      <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} />
    </CircleButton>
  </ThemeProvider>
);

const circleShowcase = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>
    </div>
    <div className="buttons-container">
      <CircleButton variant={BUTTON_VARIANT.DEFAULT}>?</CircleButton>
    </div>
    <div className="buttons-container">
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} />
      </CircleButton>
    </div>
  </ThemeProvider>
);

const transButtons = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <Button>I am transparent</Button>
    </div>
    <div className="buttons-container">
      <Button>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} /> I am transparent
        with icon
      </Button>
    </div>
    <div className="buttons-container">
      <Button>
        I am transparent with icon on the right{' '}
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} />
      </Button>
    </div>
  </ThemeProvider>
);

const iconButtons = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.PRIMARY}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} /> I love you
      </Button>
      <Button variant={BUTTON_VARIANT.PRIMARY}>
        I love you too <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} />
      </Button>
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} />
      </CircleButton>
    </div>
    <div className="buttons-container">
      <Button>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} /> Love yourself
      </Button>
      <Button>
        Go forward <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} />
      </Button>
    </div>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.DEFAULT} fullWidth>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} /> Love yourself
      </Button>
    </div>
  </ThemeProvider>
);

const showcase = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.BIG}>
        Big button
      </Button>
      <Button variant={BUTTON_VARIANT.PRIMARY}>Medium button</Button>
      <Button variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.SMALL}>
        Small button
      </Button>
    </div>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.DEFAULT} size={BUTTON_SIZE.BIG}>
        Big button
      </Button>
      <Button variant={BUTTON_VARIANT.DEFAULT}>Medium button</Button>
      <Button variant={BUTTON_VARIANT.DEFAULT} size={BUTTON_SIZE.SMALL}>
        Small button
      </Button>
    </div>
    <div className="buttons-container">
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>
      <CircleButton variant={BUTTON_VARIANT.DEFAULT}>!</CircleButton>
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} />
      </CircleButton>
    </div>
    <div className="buttons-container">
      <CircleButton variant={BUTTON_VARIANT.DEFAULT} size={BUTTON_SIZE.BIG}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.LARGE} />
      </CircleButton>
      <CircleButton variant={BUTTON_VARIANT.DEFAULT}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.MEDIUM} />
      </CircleButton>
      <CircleButton variant={BUTTON_VARIANT.DEFAULT} size={BUTTON_SIZE.SMALL}>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} />
      </CircleButton>
    </div>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.PRIMARY} fullWidth>
        Full-width (100%) button
      </Button>
    </div>
    <div className="buttons-container">
      <Button variant={BUTTON_VARIANT.DEFAULT} fullWidth>
        Full-width (100%) button
      </Button>
    </div>
  </ThemeProvider>
);

const sm = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div className="buttons-container">
      <Button className="button-twitter">twitter button</Button>
      <Button className="button-pinterest">pinterest button</Button>
    </div>
  </ThemeProvider>
);

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Buttons Showcase', showcase, { notes: { markdown: componentInfo } });

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Primary Button', primBtn, { notes: `Primary Button` });

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Default Button', defBtn, { notes: `Default Button` });

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Transparent Buttons', transButtons, {
    notes: `Unless you define "variant" property, the button is transparent. It has no border, no background, no padding, no text-color. You can insert whatever content.`,
  });

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Icon Buttons', iconButtons, { notes: { markdown: iconsNotes } });

storiesOf('Buttons/Circle Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Showcase', circleShowcase, {
    notes: `You can place a single character inside of the button or use an icon. For more info see "Icon Buttons"`,
  });
storiesOf('Buttons/Circle Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Circle Primary', circlePrimary, { notes: `Circle Button Primary` });

storiesOf('Buttons/Circle Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Circle Default', circleDefault, { notes: `Circle Button Default` });
storiesOf('Buttons/Circle Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Circle with Icon', circleWithIcon, { notes: `Circle Button with Icon` });

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Social Media', sm, { notes: `Social media buttons` });
