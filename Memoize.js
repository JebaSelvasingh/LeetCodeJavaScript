function memoize(fn) {
    const cacheStore = {}
  return function (...args) {
    const key = String(args);
    if(key in cacheStore) {
        return  cacheStore[key]
    }
    const result = fn(...args);
    cacheStore[key] = result;
    return result;
  };
}


// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//     callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1
