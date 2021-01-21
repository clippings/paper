import React from 'react';
import { AVATAR_SHAPE, AVATAR_SIZE, ICON } from '@paper/enums';
import { Avatar as AvatarComponent, IconAvatar as IconAvatarComponent } from '@paper/components';
import { AvatarPropsType } from '../../components/Avatar/types/AvatarType';

export default {
  component: AvatarComponent,
  title: 'Avatar',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [AVATAR_SIZE.SMALL, AVATAR_SIZE.MEDIUM, AVATAR_SIZE.BIG],
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
    icon: {
      control: {
        type: 'select',
        options: Object.keys(ICON),
      },
    },
  },
};

export const Avatar: React.FunctionComponent<AvatarPropsType> = args => (
  <AvatarComponent {...args} />
);
Avatar.args = {
  shape: AVATAR_SHAPE.CIRCLE,
  size: AVATAR_SIZE.MEDIUM,
  src: 'https://gravatar.com/avatar/121ff0578688ee755613ce94b41bd298?s=400&d=mp&r=pg',
  alt: 'Avatar',
};

export const IconAvatar: React.FunctionComponent<AvatarPropsType> = args => (
  <IconAvatarComponent {...args} style={{ backgroundColor: '#F5F5F5' }} />
);
IconAvatar.args = {
  shape: AVATAR_SHAPE.CIRCLE,
  size: AVATAR_SIZE.MEDIUM,
  src: 'https://gravatar.com/avatar/121ff0578688ee755613ce94b41bd298?s=400&d=mp&r=pg',
  alt: 'Avatar',
  icon: ICON.LIST,
};
