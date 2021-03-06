# Binary Search algorithm and Binary Search Trees (BSTs)

# Binary search algorithm:

# The Binary Search Tree data structure:

A binary search tree (BST) is another data structure that's used for quick retrieval of data.  When you do binary search on an array, each time you iterate you cut the range of possibilities in half.  The idea is the same in a binary search tree.  We start with a root node that serves as the entrance to the tree, and then move to the left if the value is smaller than the one we're examining right now, and move to the right if the value is bigger.  (Usually a binary search tree will not contain duplicate values.  There are ways to handle them, but we won't go over them in detail.)

Here is a visual of a BST from gitconnected with a nice article that covers the essentials of BSTs that you can read [here](https://levelup.gitconnected.com/an-into-to-binary-search-trees-432f94d180da):
![Image of Binary Search Tree](https://miro.medium.com/max/2388/1*ziYvZzrttFYMXkkV9u66jw.png)

## Defining our BST tree:

BST node:
```js
class BSTNode {
    constructor(value) {
        this.val = value; // Value (or key) held in the node
        this.left = null; // Points to node(s) to left that is/are smaller than this one
        this.right = null; // Points to node(s) to right that is/are bigger than this one
    }
}
```

Binary Search Tree structure itself:
```js
class BST {
    constructor() {
        this.root = null; // No nodes to start; root is the top of the tree
    }

    // Additional methods for the BST class go here.
}
```

## Adding a node to the BST
```js
class BST {
    constructor() {
        this.root = null; // No nodes to start; root is the top of the tree
    }

    add(val) {
        var newNode = new BSTNode(val); // Create new node
        if (this.root == null) { // Edge case: tree is empty
            this.root = newNode; // Make this node the root
            return this;
        }
        // At least one node in the tree if we reach this point
        var runner = this.root; // Runner pointing to current node
        while (runner) { // While we have nodes to look at
            if (runner.val < val) { // Move right (or insert)
                if (runner.right == null) { // No node to the right, so insert new node here
                    runner.right = newNode;
                    return this;
                } else { // If there are nodes to the right, move down the tree
                    runner = runner.right;
                }
            } else {
                if (runner.left == null) { // No node to the left, so insert new node here
                    runner.left = newNode;
                    return this;
                } else { // If there are nodes to the left, move down the tree
                    runner = runner.left;
                }
            }
        }
    }
}
```

## Useful terms for BSTs:

- Root: The topmost node in the tree
- Height: The number of levels, or generations, in the tree
- Leaf: A node with no children
- Balanced tree: When the number nodes to the left of the root and the number of nodes to the right are equal or within one
- Siblings: Nodes that have the same parent
- Subtree: The smaller tree to the left/right of the current node
- Pre-order traversal: Listing nodes in this order: root, left recursively, right recursively
- In-order traversal: Listing nodes in this order: left recursively, root, right recursively
- Post-order traversal: Listing nodes in this order: left recursively, right recursively, root
- Breadth-first search, also called level order: list all nodes one level at a time before moving to the next level