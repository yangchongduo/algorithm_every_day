/**
 * 在node.js中，使用fs模块实现文件和目录的操作
 * 每个方法均实现同步和异步两种
 * sync 同步
 * 不带 sync 异步
 */

var fs = require('fs');

var content = fs.readFileSync('index.html','utf8');// 肯定是字符串
console.log(typeof content)
console.log(content);
const data=fs.readFile('./index.html','utf-8',(err,data)=>{
    fs.writeFileSync('3.html',data)
    console.log(data)
})
// 可删除操作
const readStream=fs.createReadStream('./index.html')
const writeStream=fs.createWriteStream('./4.html')
readStream.pipe(writeStream)
//不知道为什么 处理好几个异步同时执行 请使用promise.all
setTimeout(()=>{
    fs.unlinkSync('./4.html')
},10000)

