// 转变成一个对象 可以运行在cmd 上运行
//  node test.js  --prot 3000 --ref 4000

const argv =require('yargs-parser')(process.argv.slice(2))
console.log(argv)
//首先是一个数组
console.log(process.argv)
// 截取数组从索引是2的开始截取
console.log(process.argv.slice(2))
