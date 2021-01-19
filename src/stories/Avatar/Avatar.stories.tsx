import React from 'react';
import { AVATAR_SHAPE, AVATAR_SIZE } from '@paper/enums';
import { Avatar as AvatarComponent } from '@paper/components';
import { AvatarPropsType } from '../../components/Avatar/types/AvatarType';

export default {
  component: AvatarComponent,
  title: 'Avatar',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [AVATAR_SIZE.SMALL, AVATAR_SIZE.DEFAULT, AVATAR_SIZE.BIG],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: [AVATAR_SHAPE.CIRCLE, AVATAR_SHAPE.SQUARE],
      },
    },
    src: 'https://gravatar.com/avatar/121ff0578688ee755613ce94b41bd298?s=400&d=mp&r=pg',
    alt: 'Avatar',
  },
};

export const Avatar = (args: AvatarPropsType) => <AvatarComponent {...args} />;
Avatar.args = {
  shape: AVATAR_SHAPE.CIRCLE,
  size: AVATAR_SIZE.DEFAULT,
  src: 'https://gravatar.com/avatar/121ff0578688ee755613ce94b41bd298?s=400&d=mp&r=pg',
  alt: 'Avatar',
};
