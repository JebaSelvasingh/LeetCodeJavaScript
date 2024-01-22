// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function (n) {
    var count = 0;
    return function () {
      let finalValue = n;
      if (count == 0) {
        finalValue = n;
      } else {
        finalValue = n + count;
      }
      count++;
      return finalValue;
    };
  };
  
  const counter = createCounter(10);
  console.log(counter()); // 10
  console.log(counter()); // 11
  console.log(counter()); // 12
