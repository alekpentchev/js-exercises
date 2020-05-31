const Node = require('./Node');

class BinarySearchTree { 
    constructor() { 
        // root of a binary seach tree 
        this.root = null; 
    } 
  
    // function to be implemented 
    insert(key) {
        const newNode = new Node(key);

        // if the root of the BST is empty simply assign the new node as the root
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // else run insertNode recursively
        return this.insertNode(this.root, newNode);
    }

    insertNode(tree, node) {
        // if the node to insert is smaller than the passed root value
        if (node.root < tree.root) {
            // if the left tree does not exist simply assign the node as the left tree
            if (tree.left === null) {
                tree.left = node;
                return;
            };
            //if the left tree exsists run insertNode with the left node
            return this.insertNode(tree.left, node);
        } else {
            // if the right tree does not exist simply assign the node as the right tree
            if (tree.right === null) {
                tree.right = node;
                return;
            };
            // if the right tree exsists run insertNode with the right tree and the node
            return this.insertNode(tree.right, node);
        }
    }

    // remove(key) 
                  
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
}

module.exports = BinarySearchTree;