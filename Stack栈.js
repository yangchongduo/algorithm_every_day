function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;// 这个不是在原型上扩展的方法 知识一个不同的方法
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
// 这个是对this.top操作了 peek 没有对其操作
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
// push 和pop 就是先入后出的概念  和unshift和shift 正好相反
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
console.log(s.peek());
console.log(s.peek());
console.log("length: " + s.length());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
/*console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
console.log("length: " + s.length());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());*/

