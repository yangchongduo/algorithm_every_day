/*
的语言中,对于递归的开销问题有个TCO优化（Tail Call Optimization）戳这篇博客了解更多👉[翻译] JS的递归与TCO尾调用优化

之所以想起码这篇博客，是因为最近看《算法与数据结构JavaScript描述》（请拉黑此书，bug极多，极不推荐）中使用递归遍历二叉树的算法挺绕的， 写篇博客厘清下。这里直接借用原书的代码(有删改)， 以二叉树的的中序遍历为例：
*/

// 节点对象的构造函数
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}
//二叉树的构造函数
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;

}
//插入方法
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                // 只要进来了就必须将当前的节点的左侧或者右侧=======current
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
//调用两次递归遍历二叉树
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show())
        inOrder(node.right);
    }
}
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}
//var nums=[]
//将以下数据导入二叉树
var nums =new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)


//中序遍历二叉树
inOrder(nums.root)
// 后序
postOrder(nums.root)
// 先序
preOrder(nums.root)

/* Inorder traversal:
 3 16 22 23 37 45 99
 Preorder traversal:
 23 16 3 22 45 37 99
 Postorder traversal:
 3 22 16 37 99 45 23*/
