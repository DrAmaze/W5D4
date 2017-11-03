Array.prototype.bubbleSort = function() {
  let swapped = false;

  while (!swapped) {
    swapped = true;
    for (let i = 0; i < this.length; i++){
        if (this[i] > this[i+1]){
          let temp = this[i];
        this[i] = this[i+1];
            this[i+1] = temp;
          swapped = false;
        }
    }
  }
  console.log(this);
};

String.prototype.subStrings = function() {
  let subs = [];
  for (let i = 0; i < this.length; i++) {
    subs.push(this[i]);
    for (let j = i+2; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs;
};

// let str = "wat";
// console.log(str.subStrings());
