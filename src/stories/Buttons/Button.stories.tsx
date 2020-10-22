import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import figmaDecorator from 'storybook-addon-figma';
import { Button, CircleButton, DefaultButton, PrimaryButton } from '@paper/components';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@paper/enums';
import { DefaultButtonStyle, PrimaryButtonStyle } from '../../components/Buttons/config/styles';

import '../stories.scss';

import componentInfo from './componentInfo.md';
import buttonLikeNotes from './buttonLikeLink.md';
import iconsNotes from './iconsInfo.md';

const buttonsFigma = figmaDecorator({
  url: 'https://www.figma.com/file/9yrktrewqLhb62TIO49Htg/Web-UI-Kit?node-id=521%3A0',
});

const primBtn = () => (
  <>
    <p>
      <PrimaryButton>I am primary</PrimaryButton>
    </p>
    <p>
      <Button variant={BUTTON_VARIANT.PRIMARY}>I am primary too</Button>
    </p>
  </>
);

const defBtn = () => (
  <>
    <p>
      <DefaultButton>I am default</DefaultButton>
    </p>
    <p>
      <Button variant={BUTTON_VARIANT.DEFAULT}>I am default too</Button>
    </p>
  </>
);

const circlePrimary = () => <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>;
const circleDefault = () => <CircleButton variant={BUTTON_VARIANT.DEFAULT}>?</CircleButton>;
const circleWithIcon = () => (
  <CircleButton variant={BUTTON_VARIANT.DEFAULT} className="close-button--example" />
);

const circleShowcase = () => (
  <>
    <p>
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>
    </p>
    <p>
      <CircleButton variant={BUTTON_VARIANT.DEFAULT}>?</CircleButton>
    </p>
    <p>
      <CircleButton variant={BUTTON_VARIANT.PRIMARY} className="close-button--example" />
    </p>
  </>
);

const transButtons = () => (
  <>
    <p>
      <Button>I am transparent</Button>
    </p>
    <p>
      <Button className="button-happy--example">I am transparent with icon</Button>
    </p>
    <p>
      <Button className="button-happy--example" iconRight>
        I am transparent with icon on the right
      </Button>
    </p>
  </>
);

const iconButtons = () => (
  <>
    <p className="buttons-container">
      <PrimaryButton className="button-happy--example">I love you</PrimaryButton>
      <PrimaryButton className="button-happy--example" iconRight>
        I love you too
      </PrimaryButton>
      <CircleButton variant={BUTTON_VARIANT.PRIMARY} className="button-happy--example" />
    </p>
    <p className="buttons-container">
      <Button className="button-happy--example">Love yourself</Button>
      <Button className="button-arrow--example" iconRight>
        Go forward
      </Button>
    </p>
    <p className="buttons-container">
      <DefaultButton className="button-happy--example" fullWidth>
        Love yourself
      </DefaultButton>
    </p>
  </>
);

const buttonLike = () => (
  <>
    <p>
      <a href="http://google.com" className={PrimaryButtonStyle}>
        I am a link that looks like a button
      </a>
    </p>
    <p>
      <a href="http://google.com" className={DefaultButtonStyle}>
        I am a link that looks like a button
      </a>
    </p>
  </>
);

const showcase = () => (
  <>
    <p className="buttons-container">
      <PrimaryButton size={BUTTON_SIZE.BIG}>Big button</PrimaryButton>
      <PrimaryButton>Medium button</PrimaryButton>
      <PrimaryButton size={BUTTON_SIZE.SMALL}>Small button</PrimaryButton>
    </p>
    <p className="buttons-container">
      <DefaultButton size={BUTTON_SIZE.BIG}>Big button</DefaultButton>
      <DefaultButton>Medium button</DefaultButton>
      <DefaultButton size={BUTTON_SIZE.SMALL}>Small button</DefaultButton>
    </p>
    <p className="buttons-container">
      <CircleButton variant={BUTTON_VARIANT.PRIMARY}>?</CircleButton>
      <CircleButton variant={BUTTON_VARIANT.DEFAULT}>!</CircleButton>
      <CircleButton variant={BUTTON_VARIANT.PRIMARY} className="button-happy--example" />
    </p>
    <p className="buttons-container">
      <CircleButton
        variant={BUTTON_VARIANT.DEFAULT}
        size={BUTTON_SIZE.BIG}
        className="close-button--example"
      />
      <CircleButton variant={BUTTON_VARIANT.DEFAULT} className="close-button--example" />
      <CircleButton
        variant={BUTTON_VARIANT.DEFAULT}
        size={BUTTON_SIZE.SMALL}
        className="close-button--example"
      />
    </p>
    <p>
      <PrimaryButton fullWidth>Full-width (100%) button</PrimaryButton>
    </p>
    <p>
      <DefaultButton fullWidth>Full-width (100%) button</DefaultButton>
    </p>
    <p>
      <a href="http://google.com" className={PrimaryButtonStyle}>
        I am a link that looks like a button
      </a>
    </p>
    <p>
      <a href="http://google.com" className={DefaultButtonStyle}>
        I am a link that looks like a button
      </a>
    </p>
  </>
);

const sm = () => (
  <p className="buttons-container">
    <Button className="button-twitter">twitter button</Button>
    <Button className="button-pinterest">pinterest button</Button>
  </p>
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
