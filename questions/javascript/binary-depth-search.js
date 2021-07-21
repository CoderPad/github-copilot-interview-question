/**
 * A binary tree is a data structure meant to contain a tree-like relationship between a value and one of two children
 *
 * {@link https://en.wikipedia.org/wiki/Binary_tree}
 *
 * The "_find" method is what's known as a "depth-first" search
 *
 * {@link https://en.wikipedia.org/wiki/Depth-first_search}
 */
// Copilot was given "class Node"
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Copilot suggested all of this without any help whatsoever
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (!this.root) {
            this.root = new Node(data);
        } else {
            this._insert(this.root, data);
        }
    }

    _insert(node, data) {
        if (data <= node.data) {
            if (node.left) {
                this._insert(node.left, data);
            } else {
                node.left = new Node(data);
            }
        } else {
            if (node.right) {
                this._insert(node.right, data);
            } else {
                node.right = new Node(data);
            }
        }
    }

    find(data) {
        if (!this.root) {
            return null;
        } else {
            return this._find(this.root, data);
        }
    }

    _find(node, data) {
        if (node.data === data) {
            return node;
        } else if (data <= node.data) {
            if (node.left) {
                return this._find(node.left, data);
            } else {
                return null;
            }
        } else {
            if (node.right) {
                return this._find(node.right, data);
            } else {
                return null;
            }
        }
    }

    delete(data) {
        if (!this.root) {
            return;
        } else {
            this._delete(this.root, data);
        }
    }

    _delete(node, data) {
        if (node.data === data) {
            if (!node.left && !node.right) {
                node = null;
            } else if (!node.left) {
                node = node.right;
            }
            else if (!node.right) {
                node = node.left;
            }
            else {
                let parent = node;
                let child = node.right;

                while (child.left) {
                    parent = child;
                    child = child.left;
                }

                node.data = child.data;

                if (child.right) {
                    child.right.left = child.left;
                }

                if (child.left) {
                    child.left.right = child.right;
                }

                if (parent === node) {
                    parent.left = child.right;
                } else {
                    parent.right = child.right;
                }
            }
        } else if (data <= node.data) {
            if (node.left) {
                this._delete(node.left, data);
            }
        } else {
            if (node.right) {
                this._delete(node.right, data);
            }
        }
    }

    print() {
        if (!this.root) {
            return;
        } else {
            this._print(this.root);
        }
    }

    _print(node) {
        if (node) {
            this._print(node.left);
            console.log(node.data);
            this._print(node.right);
        }
    }
}

// Copilot was given "var bst"
var bst = new BinarySearchTree();

// Copilot suggested these on its own
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.insert(2);

bst.print();
