const mergeArrays = (leftHalf, rightHalf) => {
  const mergedArray = [];
  while (leftHalf.length > 0 && rightHalf.length > 0) {
    if (leftHalf[0] < rightHalf[0]) {
      mergedArray.push(leftHalf.shift());
    } else {
      mergedArray.push(rightHalf.shift());
    }
  }
  return mergedArray.concat(leftHalf, rightHalf);
};

const sortArray = (arr) => {
  if (arr.length === 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const leftHalf = sortArray(arr.slice(0, midpoint));
  const rightHalf = sortArray(arr.slice(midpoint));
  return mergeArrays(leftHalf, rightHalf);
};

module.exports = sortArray;