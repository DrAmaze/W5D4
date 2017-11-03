// My Uniq function

const myUniq = function(arr) {
  const uniqEls = [];
  for (let i = 0; i < arr.length; i++)  {
    if ( uniqEls.includes(arr[i]) ) {
      continue;
    } else {
      uniqEls.push(arr[i]);
    }
  }
  return uniqEls;
};

// console.log(myUniq([1,2,6,3,5,3,4,6,6,6,4]));

// My TwoSum funciton

const myTwoSum = function(arr) {
  const twoSum = [];
  for (let i = 0; i < arr.length - 1; i++)  {
    for (let j = i + 1; j < arr.length; j++)  {
      if (arr[i] + arr[j] === 0) {
        twoSum.push([i, j]);
      }
    }
  }
  return twoSum;
};

// console.log(myTwoSum([2,1,-2,-6,3,-5,-3,4,6,6,6,-4]));

// my Transpose function

const myTranspose = function(arr) {
  // const columns = Array.from(
  //   { length: this[0].length },
  //   () => Array.from({ length: this.length })
  // );

  let trans = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let tempTrans = [];
    for (let j = 0; j < arr.length; j++) {
      tempTrans.push(arr[j][i]);
    }
    trans.push(tempTrans);
  }
  return trans;
};
// const arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(myTranspose(arr));
