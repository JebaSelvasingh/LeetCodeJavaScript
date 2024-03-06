/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a)-fn(b));
};

// arr = [5, 4, 1, 2, 3];
// fn = (x) => x
arr = [{"x": 1}, {"x": 0}, {"x": -1}]
fn = (d) => d.x
console.log(sortBy(arr, fn))