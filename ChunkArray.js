var chunk = function(arr, size) {
    var finalArray = [];
    var index = 0;
  
    while (index < arr.length) {
        finalArray.push(arr.slice(index, index + size));
      index += size;
    }
  
    return finalArray;
};

console.log(chunk([1,2,3,4,5], 1)) // [[1],[2],[3],[4],[5]]