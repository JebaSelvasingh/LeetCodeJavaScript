function palindromeStringCheck(str1 = '') {
       let reversedString = str1.split('').reverse().join('');
       if(str1 === reversedString) {
        return true;
       }
       return false
}
function palindromeNumCheck(num = 0) {
       let reverseNum = num.toString().split('').reverse().join('');
       if(num.toString() === reverseNum) {
              return true;
       }
       return false;
}
console.log(palindromeStringCheck("asdfasd"));
console.log(palindromeStringCheck("civic"));
console.log(palindromeNumCheck(1881));