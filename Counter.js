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