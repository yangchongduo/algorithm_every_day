const fs = require('fs')
var data = fs.readFileSync('./defaultTemplate.html')
console.log(data)
fs.writeFile('./index.html', data)
var readStream = fs.createReadStream('./defaultTemplate.html')
var writeStream = fs.createWriteStream('./index2.html')
readStream.pipe(writeStream)

// 不好重复了 rmdirSync 只能删除空的文件夹
/*const cp = require('fs-cp') 看了原吗就是流 stream
cp('./defaultTemplate.html', './index4.html')*/

//就是换个名字没有什么意思
fs.rename('./1.sync.js', './11.sync.js', (err) => {
    if (err) {
        console.log(err)
    }
})