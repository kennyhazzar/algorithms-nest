import {
  binarySearchIterableString,
  binarySearchRecursiveString,
  linearSearchString,
} from '../constants';
import { AlgType } from '../types';

const types: Record<AlgType, string> = {
  linear: linearSearchString,
  'binary-iterable': binarySearchIterableString,
  'binary-recursion': binarySearchRecursiveString,
  'selection-sort': '',
  'bubble-sort': '',
  'quick-sort': '',
  'recursion-factorial': '',
  'recursion-fibonacci': '',
  'graphs-breadth-search': '',
  'tree-algs-iterable': '',
  'tree-algs-recursion': '',
  'binary-tree': '',
};

export const getAlgorithmCodeByType = (type: AlgType) => types[type];
