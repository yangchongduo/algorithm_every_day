function sum(arr) {
    var total = 0
    arr.map((item, index)=> {
        total += item
    })
    return total
}


console.log(sum([1, 2, 3, 4]))
// ע�� reduce�ĵڶ�������
/*var sum2 = function (arr) {
    return arr.reduce(function (prev, curr, index, arr) {
        return prev + curr;
    },1);
};*/
var sum2= function(arr){
    return arr.reduce((prev,curr)=>{
        console.log(prev,curr)
        return prev +curr
    })
}
console.log(sum2([1, 2, 3, 4]))