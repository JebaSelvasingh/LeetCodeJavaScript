var createCounter = function (init) {
  let count = init;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = init || 0;
      return init;
    },
  };
};

const counter = createCounter(0);
// console.log(counter.increment()); // 1
// console.log(counter.reset()); // 0
// console.log(counter.decrement()); // -1

console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0
