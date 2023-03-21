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
