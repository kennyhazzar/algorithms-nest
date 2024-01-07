export const linearSearchString = `
let iterationCount = 0;
  for (let i = 0; i < array.length; i++) {
    iterationCount += 1;
    if (array[i] === item) {
      return { result: i, iterationCount };
    }
  }
return { result: null, iterationCount };
`;

export const binarySearchIterableString = `
let iterationCount = 0;
let start = 0;
let end = array.length;
let middle;
let found = false;
let position = -1;
  while (found === false && start <= end) {
    iterationCount += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return { result: position, iterationCount };
    }
    if (item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return { result: position, iterationCount };
`;

export const binarySearchRecursiveString = `
let middle = Math.floor((start + end) / 2);
count += 1;
if (item === array[middle]) {
  return middle;
}
if (item < array[middle]) {
  return recursiveBinarySearch(array, item, 0, middle - 1);
} else {
  return recursiveBinarySearch(array, item, middle + 1, end);
}
`;
