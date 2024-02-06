let nums = [1, 2, 3, 4];
let init = 0;

var reduce = function (n, fn, init) {
  if (nums.length) {
    nums.forEach((accum) => {
      init = fn(init, accum);
    });
    return init;
  } else {
    return init;
  }
};

fn = function sum(accum, curr) {
  return accum + curr;
};
// fn = function sum(accum, curr) {
//   return accum + curr * curr;
// };
// fn = function sum(accum, curr) { return 0; }
console.log(reduce(nums, fn, init));
