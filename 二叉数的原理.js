function rec(x){
    if(x!==1){
        console.log(x)
        rec(x-1)
        console.log(x)
    }
}
rec(5) //输出为5 4 3 2 2 3 4 5
// 先入后出

/*
由这个栗子🌰可知：在递归调用语句前的语句执行是正常顺序， 但是递归调用语句后的执行却是相反的也就是说在递归还没有完成时，函数的输出结果暂时被挂起，因为一般在计算机中，是以栈的形式来实现递归，这个过程如下：*/
/*
* https://segmentfault.com/a/1190000004010854
* */
