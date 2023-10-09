// Reverse Linked List

// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1];

// Example 2:
// Input: head = [1, 2];
// Output: [2, 1];

// Example 3:
// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range
// [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively
// or recursively. Could you implement both?

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

// This solution is iterative because we are using a while loop to iterate through the linked list
var reverseList = function (head: any) {
  // create a variable to store the previous node
  let prev = null;
  // create a variable to store the current node
  let curr = head;
  // create a variable to store the next node
  let next = null;
  // iterate through the linked list
  while (curr !== null) {
    // store the next node
    next = curr.next;
    // set the current node's next to the previous node
    curr.next = prev;
    // set the previous node to the current node
    prev = curr;
    // set the current node to the next node
    curr = next;
  }
  // return the previous node
  return prev;
};

// time complexity: O(n) because we are iterating through the linked list
// space complexity: O(1) because we are not creating any new data structures

// Test cases:
// Example 1:
// const head = [1, 2, 3, 4, 5];
// console.log(reverseList(head)); // [5, 4, 3, 2, 1];

// Example 2:
// const head2 = [1, 2];
// console.log(reverseList(head2)); // [2, 1];

// Example 3:
// const head3 = [];
// console.log(reverseList(head3)); // []

// Approach:
// 1. create a prev variable and assign it to null
// 2. loop through the linked list (while loop) by checking if head is not null
// a. create nextNode variable and assign it to head.next because we will lose the reference to the next node
// b. Assign head.next to prev because we are reversing the linked list
// c. Assign prev to head because we are moving the prev pointer forward
// d. Assign head to nextNode because we are moving the head pointer forward
// 3. return prev because that is the new head of the linked list

// This solution is iterative because we are using a while loop to iterate through the linked list
// Fast runtime and low memory usage
var reverseList2 = function (head: any) {
  let prev = null;
  while (head !== null) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};

// time complexity: O(n) because we are iterating through the linked list
// space complexity: O(1) because we are not creating any new data structures and we are using constant space

// Approach:
// 1. create a function that takes in a head node
// 2. create a base case that checks if the head is null or the head.next is null
// 3. create a recursive case that calls the function recursively
// 4. create a variable to store the reversedListHead
// 5. set the reversedListHead to the recursive call
// 6. set the head.next.next to the head
// 7. set the head.next to null
// 8. return the reversedListHead

// This solution is recursive because we are calling the function recursively
var reverseList3 = function (head: any) {
  if (head === null || head.next === null) {
    return head;
  }
  let reversedListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedListHead;
};

// time complexity: O(n) because we are iterating through the linked list
// space complexity: O(n) because we are creating new function calls
