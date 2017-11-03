Array.prototype.range = function range(start, end) {
  if (start === end) {
    return [];
  }
  let r = range(start, end - 1);
  r.push(end - 1);
  return r;
};

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.range(0,4));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = arr.pop() + sumRec(arr);
  return sum;
}


let arr = [1,2,3,4];

console.log(sumRec(arr));
