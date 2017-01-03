function Node(data, left, right) {// 这是每个节点的意思
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;// 构建二叉树
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getmin = getmin;
    this.getmax = getmax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    this.getSmallest = getSmallest;
}

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
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}
// 就看他的左侧或者是右侧是不是 null left || right
function getmin() {
    var current = this.root;
    console.log("debug: " + current.data);
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}
var data=nums.getmin()
console.log(data)
function getmax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

var data=nums.getmax()
console.log(data)
function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}
var data=nums.find(5)
console.log(data)
function getSmallest(node) {
    if (node.left == null) {
        return node;
    }
    else {
        return getSmallest(node.left);
    }
}
var data=nums.getSmallest(99)
console.log(data)
function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}




/*console.log("Inorder traversal: ");
 inOrder(nums.root);
 console.log("\n");
 console.log("Preorder traversal: ");
 preOrder(nums.root);
 console.log("\n");
 console.log("Postorder traversal: ");
 postOrder(nums.root);
 console.log("\n");
 var min = nums.getmin();
 console.log("The minimum value of the BST is: " + min);
 var max = nums.getmax();
 console.log("The maximum value of the BST is: " + max);
 inOrder(nums.root);
 console.log("\n");
 console.log("Enter a value to search for: ");
 var value = parseInt(readline());
 var found = nums.find(value);
 if (found != null) {
 console.log("Found " + value + " in the BST.");
 }
 else {
 console.log(value + " was not found in the BST.");
 }*/
//inOrder(nums.root);
//console.log("\n");
//var num = parseInt(readline());
//nums.remove(num);
//inOrder(nums.root);