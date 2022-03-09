import * as React from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';

import Group from './button-group';
import { ConfigContext } from '../config-provider';
import Wave from '../_util/wave';
import { tuple } from '../_util/type';
import devWarning from '../_util/devWarning';
import SizeContext, { SizeType } from '../config-provider/SizeContext';
import LoadingIcon from './LoadingIcon';
import { cloneElement } from '../_util/reactNode';

function isString(str: any) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type: ButtonType | undefined) {
  return type === 'text' || type === 'link';
}

function isReactFragment(node: React.ReactNode) {
  return React.isValidElement(node) && node.type === React.Fragment;
}

function insertSpace(child: React.ReactChild, needInserted: boolean) {
  if(child === null) return;

  const SPACE = needInserted ? ' ' : '';

  if(
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    isString(child.type)
  ) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE);
    });
  }

  if(isReactFragment(child)) {
    return <span>{child}</span>
  }
  return child;
}

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('default', 'circle', 'round');
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type LegacyButtonType = ButtonType | 'danger';
export function convertLegacyProps(type?: LegacyButtonType): ButtonProps {
  if(type === 'danger') return {danger: true};
  return {type};
}

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}