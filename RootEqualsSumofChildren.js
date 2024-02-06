

var checkTree = function (root) {
  let finalRes = root[1] + root[2];
  if (finalRes == root[0]) {
    return true;
  } else {
    return false;
  }
};

console.log(checkTree([10, 4, 6]));
console.log(checkTree([5, 3, 1]));



