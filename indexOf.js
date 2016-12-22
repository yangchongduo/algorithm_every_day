/*
function indexOf(arr, item) {
    const data = arr.map((a, b)=> {
        if (a === item) {
            console.log(typeof b)
            return (b + 1)
        } else {
            return -1
        }
    })
    var flag=false
    data.map((a, b)=> {
        if (a===-1) {
            if(flag){
               return
            }
            flag = -1
        }else{
            flag=a
        }
    })
    return flag
}
console.log(indexOf([1, 2, 3, 4], 6))*/
function indexOf(arr, item) {
    var n;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == item){
            n = i;
            break;
        }else{
            n = -1;
        }
    }

    return n;

}

console.log(indexOf([ 1, 2, 3, 4 ], 3))
