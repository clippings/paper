import {
  createClassName,
  createClassNameModifier,
  createComponentClassName,
  createFormElementClassName,
  createFormElementClassNameModifier,
} from '../utils/ClassNameModifierUtil';
import { BADGE_TYPE } from '../../components/Badge/enums/BadgeTypeEnum';
import { BADGE_SIZE } from '../../components/Badge/enums/BadgeSizeEnum';
import { HEADING_TYPE } from '../../components/Heading/enums/HeadingEnum';
import { TEXT_TYPE } from '../../components/Text/enums/TextTypeEnum';
import { LIST_SPACING } from "../../components/List/enums/ListSpacingEnum";

const classNames = {
  accordion: {
    container: createClassName('accordion'),
    body: createClassNameModifier('accordion', 'body'),
    item: createClassNameModifier('accordion', 'item'),
    title: createClassNameModifier('accordion', 'title'),
    titleWrap: createClassNameModifier('accordion', 'title__wrap'),
    titleActive: createClassNameModifier('accordion', 'title__active'),
  },
  badge: {
    [BADGE_TYPE.UNSPECIFIED]: createComponentClassName('badge', 'unspecified'),
    [BADGE_TYPE.SUCCESS]: createComponentClassName('badge', 'success'),
    [BADGE_TYPE.WARNING]: createComponentClassName('badge', 'warning'),
    [BADGE_SIZE.SMALL]: createComponentClassName('badge', 'small'),
    [BADGE_SIZE.MEDIUM]: createComponentClassName('badge', 'medium'),
  },
  dateInput: {
    label: createFormElementClassName('label'),
    labelTitle: createFormElementClassName('label-title'),
    inputContainer: createFormElementClassName('input-container'),
    errorContainer: createFormElementClassName('error'),
    error: createClassName('error'),
    datepicker: createFormElementClassNameModifier('label', 'datepicker'),
  },
  heading: {
    [HEADING_TYPE.DEFAULT]: createComponentClassName('heading', 'default'),
    [HEADING_TYPE.SMALL]: createComponentClassName('heading', 'small'),
    [HEADING_TYPE.LARGE]: createComponentClassName('heading', 'large'),
    container: createClassName('heading')
  },
  imageCover: {
    containerSingle: createClassName('image-cover-single'),
    containerMultiple: createClassName('image-cover-multiple'),
    quantityContainer: createComponentClassName('image-cover', 'quantity-container'),
    textContainer: createComponentClassName('image-cover', 'text-container'),
    imageSingle: createComponentClassName('image-cover', 'image-single'),
    imageMultiple: createComponentClassName('image-cover', 'image-multiple'),
  },
  list: {
    container: createClassName('list'),
    [LIST_SPACING.NONE]: createClassNameModifier('list', 'no-spacing')
  },
  listItem: {
    container: createComponentClassName('list-item', 'container'),
    content: createComponentClassName('list-item', 'content'),
  },
  listNumber: {
    container: createClassName('list-number'),
  },
  listNumberItem: {
    container: createComponentClassName('list-number-item', 'container'),
  },
  searchInput: {
    wrapper: createFormElementClassName('search'),
    input: createFormElementClassNameModifier('search', 'input'),
    icon: createFormElementClassNameModifier('search', 'icon'),
  },
  toast: {
    container: createClassName('toast'),
    show: createClassName('toast__show'),
  },
  text: {
    [TEXT_TYPE.SMALL]: createComponentClassName('text', 'small'),
    [TEXT_TYPE.MEDIUM]: createComponentClassName('text', 'medium'),
    [TEXT_TYPE.DEFAULT]: createComponentClassName('text', 'default'),
  },
  statusLabel: {
    container: createClassName('status-label'),
  },
  select: {
    wrapper: createFormElementClassName('select'),
    labelWrap: createFormElementClassNameModifier('select', 'label-wrap'),
    label: createFormElementClassNameModifier('select', 'label'),
    labelDefault: createFormElementClassNameModifier('select', 'label-default'),
    dropdown: createFormElementClassNameModifier('select', 'dropdown'),
    dropdownItem: createFormElementClassNameModifier('select', 'dropdown__item'),
    selected: createFormElementClassNameModifier('select', 'dropdown__item-selected'),
    icon: createFormElementClassNameModifier('select', 'icon'),
  },
  textInput: {
    label: createFormElementClassName('label'),
    labelTitle: createFormElementClassName('label-title'),
    inputContainer: createFormElementClassName('input-container'),
    errorContainer: createFormElementClassName('error'),
    error: createClassName('error'),
  },
  popover: {
    block: createClassName('popover-block'),
    menu: createClassName('popover-menu'),
  },
  autocompleteInput: {
    wrapper: createFormElementClassName('autocomplete'),
    inputWrapper: createFormElementClassNameModifier('autocomplete', 'input-wrapper'),
    hits: createFormElementClassNameModifier('autocomplete', 'hits'),
    input: createFormElementClassNameModifier('autocomplete', 'input-wrapper__input'),
    icon: createFormElementClassNameModifier('autocomplete', 'input-wrapper__icon'),
    closeIcon: createFormElementClassNameModifier('autocomplete', 'input-wrapper__icon-close'),
  },
  autocompleteHit: {
    hit: createFormElementClassNameModifier('autocomplete', 'hits__hit'),
    active: createFormElementClassNameModifier('autocomplete', 'hits__hit-active'),
  },
};

export default classNames;
