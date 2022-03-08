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
  
}