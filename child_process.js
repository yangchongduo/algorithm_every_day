const exec =require('child_process').exec
exec('cat ./1.txt',(err,stdout,stderr)=>{
    console.log(`stdout: ${stdout}`);
})
exec(`node ${paths.server} --port ${argv.port}`)
// 只要以上代码运行,就会启动一个子进程，一个子进程需要服务的支持  node xxx.js 就会启动一个服务，node的服务 node 进程