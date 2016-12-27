/*Example:
 Given s = "hello", return "olleh".
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    const ary=s.split('')
   var string=ary.reverse().join('')
    return string
};
var s='yangchongduo'
console.log(reverseString(s))