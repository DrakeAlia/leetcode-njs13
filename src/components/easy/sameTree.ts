// Same Tree
// https://leetcode.com/problems/same-tree/description/

// Given the roots of two binary trees p and q, write a
// function to check if they are the same or not.

// Two binary trees are considered the same if they are
// structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:
// * The number of nodes in both trees is in the range [0, 100].
// * -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p: any, q: any) {
  // Base case: if both nodes are null, return true
  if (p === null && q === null) {
    return true;
  }
  // If one node is null but the other isn't, return false
  if (p === null || q === null) {
    return false;
  }

  // If the values of the nodes are equal, recurse
  if (p.val === q.val) {
    // Recurse on the left and right nodes
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  // If the values of the nodes aren't equal, return false
  return false;
};

// Time complexity: O(n) where n is the number of nodes in the tree and because we have to visit every node
// Space complexity: O(n) where n is the number of nodes in the tree and because we have to store every node in the call stack

// Test cases:
// Example 1
const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};
const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};
console.log(isSameTree(tree1, tree2)); // true