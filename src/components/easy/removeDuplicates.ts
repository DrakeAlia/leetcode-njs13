// Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

// Given the head of a sorted linked list, delete all duplicates
// such that each element appears only once. Return the linked list
// sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// This solution uses a while loop to traverse the list
var deleteDuplicates = function (head: any) {
  // create a variable to store the current node
  let current = head;
  // loop while the current node and the next node exist
  while (current && current.next) {
    // if the current node's value is equal to the next node's value
    if (current.val === current.next.val) {
      // set the current node's next pointer to the next node's next pointer
      current.next = current.next.next;
      // if the current node's value is not equal to the next node's value
    } else {
      // set the current node to the next node
      current = current.next;
    }
    console.log(current);
  }
  // return the head
  return head;
};

// Time Complexity: O(n) because we traverse the entire list
// Space Complexity: O(1) because we don't create any new data structures

// Tests
// Example 1
const head1 = [1, 1, 2];
console.log(deleteDuplicates(head1)); // [1,2]
// Example 2
const head2 = [1, 1, 2, 3, 3];
console.log(deleteDuplicates(head2)); // [1,2,3]
// Example 3
// const head3 = [];
// console.log(deleteDuplicates(head3)); // []
// Example 4
const head4 = [1];
console.log(deleteDuplicates(head4)); // [1]
