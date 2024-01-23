function anagramCompare(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return false;
  }

  var str1Sort = str1.split("").sort();
  var str2Sort = str2.split("").sort();
  console.log(str1Sort, str2Sort);
  for (let i = 0; i <= str1.length; i++) {
    if (str1Sort[i] !== str2Sort[i]) {
      return false;
    }
    return true;
  }
}

console.log(anagramCompare("hello", "sdfasdf"));
