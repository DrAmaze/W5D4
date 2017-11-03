Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
// const arr = [1,2,3];

// const func = function(n) {
//   console.log(n + 12);
// };
//
// arr.myEach(func);

Array.prototype.myMap = function(callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i]));
  }
};

// const arr = [3,4,5];
// const func = function(n) {
//   console.log(n + 12);
// };
// arr.myMap(func);
// console.log(arr);

const reduce = function(x,y) {
  return x + y;
};

Array.prototype.myReduce = function(callback,accum) {
  let acc = 0;
  if(accum) {
    acc = accum;
  }

  this.myEach(el => {
    acc = callback(acc, el);
  });
  return acc;
};


// const arr = [1,2,6,34,9];
// console.log(arr.myReduce(reduce,100));
