import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface ImageCoverInterface extends ComponentInterface {
  image: string;
  imageTitle?: string;
  className?: string;
  type: any;
}
