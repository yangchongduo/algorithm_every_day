const nums = [3, 3, 4, 4, 5, 5, 8]
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var obj = {}
    var ary = []
    nums.map((item, index) => {
        obj[item] = obj[item] ? obj[item] + 1 : 1
    })
    // 重点:  ([key,value])=>{}
    Object.entries(obj).map(([key, value]) => {
        if (value == 1) {
            ary.push(key)
        }
    })
    return ary
};
console.log( singleNumber(nums))
/*
var data = {'3': 2, '4': 2, '5': 2, '8': 1}
console.log(Object.values(data))*/
