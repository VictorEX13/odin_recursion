function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    return merge(
      mergeSort(arr.slice(0, arr.length / 2)),
      mergeSort(arr.slice(arr.length / 2))
    );
  }
}

function merge(arrLeft, arrRight) {
  const result = [];
  const left = [...arrLeft];
  const right = [...arrRight];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}
