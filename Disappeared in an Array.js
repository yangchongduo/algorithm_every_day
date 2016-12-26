/*
 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [5,6]*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    var missing = [];
    for(let i=1;i<=nums.length;i++){
        if (nums.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing
};
console.log(findDisappearedNumbers([1,1]))

