/*
* Example:

 n = 15,

 Return:
 [
 "1",
 "2",
 "Fizz",
 "4",
 "Buzz",
 "Fizz",
 "7",
 "8",
 "Fizz",
 "Buzz",
 "11",
 "Fizz",
 "13",
 "14",
 "FizzBuzz"
 ]
*
* */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const ary=[]
    for (let i=1 ;i<=n;i++){
        var item=i
        if(i%3==0){
            item='Fizz'
        }
        if(i%5===0){
            item='Buzz'
        }
        if(i%3==0 && i%5===0){
            item='FizzBuzz'
        }
        ary.push(item)
    }
    return ary
};
console.log(fizzBuzz(150))