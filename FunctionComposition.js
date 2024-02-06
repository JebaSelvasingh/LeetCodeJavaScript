var compose = function (functions) {
  return function (x) {
    let xy = x;
    if (functions != []) {
      functions = functions.reverse();
      functions.forEach((ele) => {
        xy = ele(xy);
        console.log("xy: ", xy); //debugging purpose
      });
    }
    return xy;
  };
};

// const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
const fn = compose([]);
console.log(fn(1));
