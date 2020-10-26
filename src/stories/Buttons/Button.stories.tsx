import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import figmaDecorator from 'storybook-addon-figma';
import { Button, CircleButton, DefaultButton, Icon, PrimaryButton } from '@paper/components';
import { BUTTON_SIZE, BUTTON_VARIANT, ICON, ICONS_COLOR, ICONS_SIZE } from '@paper/enums';
import { DefaultButtonStyle, PrimaryButtonStyle } from '../../components/Buttons/config/styles';

import '../stories.scss';

import componentInfo from './componentInfo.md';
import buttonLikeNotes from './buttonLikeLink.md';
import iconsNotes from './iconsInfo.md';

const buttonsFigma = figmaDecorator({
  url: 'https://www.figma.com/file/9yrktrewqLhb62TIO49Htg/Web-UI-Kit?node-id=521%3A0',
});

const primBtn = () => (
  <div className="buttons-container">
    <PrimaryButton>I am primary</PrimaryButton>
    <Button variant={BUTTON_VARIANT.PRIMARY}>I am primary too</Button>
  </div>
);

const defBtn = () => (
  <div className="buttons-container">
    <DefaultButton>I am default</DefaultButton>
    <Button variant={BUTTON_VARIANT.DEFAULT}>I am default too</Button>
  </div>
);

const circlePrimary = () => <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>;
const circleDefault = () => <CircleButton variant={BUTTON_VARIANT.DEFAULT}>?</CircleButton>;
const circleWithIcon = () => (
  <CircleButton variant={BUTTON_VARIANT.DEFAULT}>
    <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} />
  </CircleButton>
);

const circleShowcase = () => (
  <>
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
  </>
);

const transButtons = () => (
  <>
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
  </>
);

const iconButtons = () => (
  <>
    <div className="buttons-container">
      <PrimaryButton>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} /> I love you
      </PrimaryButton>
      <PrimaryButton>
        I love you too <Icon icon={ICON.BOARD} color={ICONS_COLOR.WHITE} size={ICONS_SIZE.SMALL} />
      </PrimaryButton>
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
      <DefaultButton fullWidth>
        <Icon icon={ICON.BOARD} color={ICONS_COLOR.DARK} size={ICONS_SIZE.SMALL} /> Love yourself
      </DefaultButton>
    </div>
  </>
);

const buttonLike = () => (
  <>
    <div className="buttons-container">
      <a href="http://google.com" className={PrimaryButtonStyle}>
        I am a link that looks like a button
      </a>
    </div>
    <div className="buttons-container">
      <a href="http://google.com" className={DefaultButtonStyle}>
        I am a link that looks like a button
      </a>
    </div>
  </>
);

const showcase = () => (
  <>
    <div className="buttons-container">
      <PrimaryButton size={BUTTON_SIZE.BIG}>Big button</PrimaryButton>
      <PrimaryButton>Medium button</PrimaryButton>
      <PrimaryButton size={BUTTON_SIZE.SMALL}>Small button</PrimaryButton>
    </div>
    <div className="buttons-container">
      <DefaultButton size={BUTTON_SIZE.BIG}>Big button</DefaultButton>
      <DefaultButton>Medium button</DefaultButton>
      <DefaultButton size={BUTTON_SIZE.SMALL}>Small button</DefaultButton>
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
      <PrimaryButton fullWidth>Full-width (100%) button</PrimaryButton>
    </div>
    <div className="buttons-container">
      <DefaultButton fullWidth>Full-width (100%) button</DefaultButton>
    </div>
    <div className="buttons-container">
      <a href="http://google.com" className={PrimaryButtonStyle}>
        I am a link that looks like a button
      </a>
    </div>
    <div className="buttons-container">
      <a href="http://google.com" className={DefaultButtonStyle}>
        I am a link that looks like a button
      </a>
    </div>
  </>
);

const sm = () => (
  <div className="buttons-container">
    <Button className="button-twitter">twitter button</Button>
    <Button className="button-pinterest">pinterest button</Button>
  </div>
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
  .add('Button-like Link', buttonLike, { notes: { markdown: buttonLikeNotes } });

storiesOf('Buttons', module)
  .addDecorator(jsxDecorator)
  .addDecorator(buttonsFigma)
  .add('Social Media', sm, { notes: `Social media buttons` });
