import { TextDescriptionPropsType } from '../../Text/types/TextPropsType';

export type CardPropTypes = CardImgContainerPropTypes & {
  img: string;
  alt: string;
  description: TextDescriptionPropsType;
};

export type CardImgContainerPropTypes = {
  selected?: boolean;
};
