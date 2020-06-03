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

    remove(key) {
        this.root = this.removeNode(this.root, key)
    }

    removeNode(rootNode, key) {
        if (rootNode === null) {
            return;
        } else if (key < rootNode.root) {
            rootNode.left = this.removeNode(rootNode.left, key);
            return rootNode;
        } else if (key > rootNode.root) {
            rootNode.right = this.removeNode(rootNode.right, key)
            return rootNode;
        } else {
            if (rootNode.left === null && rootNode.right === null) {
                rootNode = null;
                return rootNode;
            } else if (rootNode.left === null) {
                rootNode = rootNode.right
                return rootNode;
            } else if (rootNode.right === null) {
                rootNode = rootNode.left;
                return rootNode;
            } else {
                // TODO: rootNode has both left and right branches !== null
            }
        }
    }
                  
  
    // Helper function
    findNode(key, node) {
        if (node.root === null) {
            return;
        } else if (node.root === key) {
            return node;
        } else if (key < node.root) {
            return findNode(key, node.left);
        } else {
            return findNode(key, node.right);
        }
    }
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
}

module.exports = BinarySearchTree;