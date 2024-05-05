/**
 * File: preorder_traversal_i_compact.ts
 * Created Time: 2023-05-09
 * Author: Justin (xiefahit@gmail.com)
 */

import { type TreeNode } from '../modules/TreeNode';
import { arrToTree } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';

/* Pre-order traversal: Example one */
function preOrder(root: TreeNode | null, res: TreeNode[]): void {
    if (root === null) {
        return;
    }
    if (root.val === 7) {
        // Record solution
        res.push(root);
    }
    preOrder(root.left, res);
    preOrder(root.right, res);
}

// Driver Code
const root = arrToTree([1, 7, 3, 4, 5, 6, 7]);
console.log('\nInitialize binary tree');
printTree(root);

// Pre-order traversal
const res: TreeNode[] = [];
preOrder(root, res);

console.log('\nOutput all nodes with value 7');
console.log(res.map((node) => node.val));

export {};
