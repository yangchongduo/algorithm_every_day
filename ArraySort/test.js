var ary=[2,34,6,77]
console.time('time')
ary.sort((a,b)=>{
    return a-b
})
console.timeEnd('time')
console.log(ary)