/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import {
  binarySearchIterableString,
  linearSearchString,
} from '@core/constants';
import { ArraySearchResponse } from './dto';
import { AlgType } from '@core/types';
import { getAlgorithmCodeByType } from '@core/utils';

@Injectable()
export class SearchService {
  /**
   * Линейный поиск O(n)
   * @param array массив
   * @param item искомый элемент
   */
  evaluateSearch(
    array: Array<number>,
    item: number,
    algType: AlgType,
  ): ArraySearchResponse {
    const startTime = new Date().getTime();
    const result = eval(`() => {${getAlgorithmCodeByType(algType)}}`)();
    return {
      ...result,
      code: linearSearchString,
      ms: new Date().getTime() - startTime,
    };
  }

  /**
   * Бинарный поиск (итерации)
   * @param array массив
   * @param item искомый элемент
   */
  binarySearchIterable(
    array: Array<number>,
    item: number,
  ): ArraySearchResponse {
    const startTime = new Date().getTime();
    let iterationCount = 0;
    let start = 0;
    let end = array.length;
    let middle: number | null = null;
    let found = false;
    let position = null;
    while (found === false && start <= end) {
      iterationCount += 1;
      middle = Math.floor((start + end) / 2);
      if (array[middle] === item) {
        found = true;
        position = middle;
        return {
          result: position,
          iterationCount,
          code: binarySearchIterableString,
          ms: new Date().getTime() - startTime,
        };
      }
      if (item < array[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return {
      result: position,
      iterationCount,
      code: binarySearchIterableString,
      ms: new Date().getTime() - startTime,
    };
  }
}
