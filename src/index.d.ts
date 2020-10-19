import React from 'react';
import { ComponentType } from './core/interfaces/ComponentType';
import { AccordionItemPropsType } from './components/Accordion/types/AccordionItemPropsType';
import { AccordionPropsType } from './components/Accordion/types/AccordionPropsType';
import { HeadingPropsType } from './components/Heading/types/HeadingPropsType';
import { AccordionTittlePropsType } from './components/Accordion/types/AccordionTittlePropsType';
import { AutocompleteHitPropsType } from './components/Autocomplete/types/AutocompleteHitPropsType';
import { AutocompleteInputPropsType } from './components/Autocomplete/types/AutocompleteInputPropsType';
import { BadgeInterface } from './components/Badge/types/BagdePropsType';
import { DateInputPropsTypes } from './components/DateInput/types/DateInputPropsTypes';
import { IconPropsType } from './components/Icon/types/IconPropsType';
import { ImageCoverPropsType } from './components/ImageCover/types/ImageCoverPropsType';
import { ListPropsType } from './components/List/types/ListPropsType';
import { ListItemPropsType } from './components/ListItem/types/ListItemPropsType';
import { PopoverPropsType } from './components/Popover/types/PopoverPropsType';
import { SearchInputPropsType } from './components/SearchInput/types/SearchInputPropsType';
import { SelectPropsType } from './components/Select/types/SelectPropsType';
import { TextPropsType } from './components/Text/types/TextPropsType';
import { TextInputPropsType } from './components/TextInput/types/TextInputPropsType';
import { ToastPropsType } from './components/Toast/types/ToastPropsType';

export declare const AccordionBody: React.FunctionComponent<ComponentType>;

export declare const AccordionTitle: React.FunctionComponent<AccordionTittlePropsType>;

export declare const AccordionItem: React.FunctionComponent<AccordionItemPropsType> & {
  Title: typeof AccordionTitle;
  Body: typeof AccordionBody;
};

export declare const Accordion: React.FunctionComponent<AccordionPropsType> & {
  Item: typeof AccordionItem;
};

export declare const AutocompleteHit: React.FunctionComponent<AutocompleteHitPropsType>;

export declare const AutocompleteInput: React.FunctionComponent<AutocompleteInputPropsType>;

export declare const Badge: React.FunctionComponent<BadgeInterface>;

export declare const DateInput: React.FunctionComponent<DateInputPropsTypes>;

export declare const Heading: React.FunctionComponent<HeadingPropsType>;

export declare const Icon: React.FunctionComponent<IconPropsType>;

export declare const ImageCover: React.FunctionComponent<ImageCoverPropsType>;

export declare const List: React.FunctionComponent<ListPropsType>;

export declare const ListItem: React.FunctionComponent<ListItemPropsType>;

export declare const ListNumber: React.FunctionComponent<ComponentType>;

export declare const ListNumberItem: React.FunctionComponent<ComponentType>;

export declare const PopoverBlock: React.FunctionComponent<PopoverPropsType>;

export declare const PopoverMenu: React.FunctionComponent<PopoverPropsType>;

export declare const SearchInput: React.FunctionComponent<SearchInputPropsType>;

export declare const Select: React.FunctionComponent<SelectPropsType>;

export declare const StatusLabel: React.FunctionComponent<ComponentType>;

export declare const Text: React.FunctionComponent<TextPropsType>;

export declare const TextInput: React.FunctionComponent<TextInputPropsType>;

export declare const Toast: React.FunctionComponent<ToastPropsType>;

export declare enum HEADING_TYPE {
  SMALL = 'small',
  LARGE = 'large',
}

export declare enum BADGE_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export declare enum BADGE_TYPE {
  UNSPECIFIED = 'unspecified',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export declare enum ICON {
  ARROW = 'ARROW',
  ARROW_DOWN = 'ARROW_DOWN',
  ARROW_LEFT = 'ARROW_LEFT',
  ARROW_UP = 'ARROW_UP',
  BELL = 'BELL',
  BOARD = 'BOARD',
  CALENDAR = 'CALENDAR',
  CHEVRON = 'CHEVRON',
  CHEVRON_DOWN = 'CHEVRON_DOWN',
  CHEVRON_LEFT = 'CHEVRON_LEFT',
  CHEVRON_UP = 'CHEVRON_UP',
  CHEVRON_DOUBLE = 'CHEVRON_DOUBLE',
  CLOSE = 'CLOSE',
  DOWNLOAD = 'DOWNLOAD',
  DUPLICATE = 'DUPLICATE',
  EDIT = 'EDIT',
  EXPORT = 'EXPORT',
  FOLDER = 'FOLDER',
  HAPPY = 'HAPPY',
  HIDE = 'HIDE',
  IMPORT = 'IMPORT',
  INVITE = 'INVITE',
  LINK = 'LINK',
  LIST = 'LIST',
  MATERIALS = 'MATERIALS',
  MENU = 'MENU',
  MESSAGE = 'MESSAGE',
  MORE = 'MORE',
  MOVE_TO = 'MOVE_TO',
  PICKER = 'PICKER',
  PLUS = 'PLUS',
  RESTORE = 'RESTORE',
  SEARCH = 'SEARCH',
  SHOW = 'SHOW',
  SIZE = 'SIZE',
  SORT = 'SORT',
  TEXT = 'TEXT',
  TICK = 'TICK',
  TRASH = 'TRASH',
  UPLOAD = 'UPLOAD',
  ZOOM_IN = 'ZOOM_IN',
  ZOOM_OUT = 'ZOOM_OUT',
  QUESTION_MARK = 'QUESTION_MARK',
  EXCLAMATION_MARK = 'EXCLAMATION_MARK',
}

export declare enum ICONS_COLOR {
  DARK = '#141414',
  GREY = '#8f8f8f',
  WHITE = '#ffffff',
}

export enum ICONS_SIZE {
  SMALL = 14,
  MEDIUM = 16,
  LARGE = 20,
  LARGER = 28,
}

export declare enum IMAGE_COVER_TYPE {
  MULTIPLE = 'multiple',
  SINGLE = 'single',
}

export declare enum LIST_SPACING {
  DEFAULT = 'default',
  SMALL = 'small',
}

export declare enum LIST_ITEM_SIZE {
  DEFAULT = 'default',
  SMALL = 'small',
}

export declare enum SUBMIT_TYPE {
  ENTER = 'enter',
  KEYUP = 'keyup',
}

export declare enum TEXT_TYPE {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export declare function useDropdown(
  ref: React.MutableRefObject<Element | null>,
  initialState?: boolean
): {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleToggle: () => void;
};
