// LinkedList:

// Name your class / constructor (something you can call new on) LinkedList

// LinkedList is made by making nodes that have two properties, the value that's being
// stored and a pointer to the next node in the list. The LinkedList then keep track of
// the head and usually the tail (I would suggest keeping track of the tail because it makes pop
// really easy.) As you may have notice, the unit tests are the same as the ArrayList;
// the interface of the two are exactly the same and should make no difference to the
// consumer of the data structure.

// length - integer  - How many elements in the list
// push - function - accepts a value and adds to the end of the list
// pop - function - removes the last value in the list and returns it
// get - function - accepts an index and returns the value at that position
// delete - function - accepts an index, removes value from list, collapses,
// and returns removed value

// I would suggest making a second class, a Node class. However that's up to you how you
// implement it. A Node has two properties, value and next.

// As always, you can change describe to xdescribe to prevent the unit tests from running while
// you work

// We start with our LinkedList class, which has a constructor that initializes
// the head, tail, and length properties to null, null, and 0, respectively.
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // We then define a push method on the LinkedList's prototype. This method
  // accepts a value as its input. The first thing we do is create a new Node
  // instance with the input value. We increment the length of the LinkedList
  // by 1, since we're adding a new node. If the LinkedList is initially empty,
  // we set the head property to the newly created node. If the LinkedList is
  // not empty, we set the tail node's next property to the new node.
  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    // We then set the tail property to the new node in either case.
    this.tail = node;
  }
  // We then define a pop method on the LinkedList's prototype. This method
  // does not accept any input. If the LinkedList is initially empty, we return
  // undefined. If the LinkedList has only one node, we set both the head and
  // tail properties to null. Otherwise, we set the tail property to the second
  // to last node and set its next property to null. We then decrement the
  // length of the LinkedList by 1 and return the value of the former tail node.
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current.value;
  }
  // We then define a _find method on the LinkedList's prototype. This method
  // accepts an index as its input. If the index is invalid, we return null. If
  // the index is valid, we loop through the LinkedList and return the node at
  // the specified index.
  _find(index) {
    if (index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
  // We then define a get method on the LinkedList's prototype. This method
  // accepts an index as its input. If the index is invalid, we return undefined.

// unit tests
// do not modify the below code
// describe("LinkedList", function () {
//   const range = (length) =>
//     Array.apply(null, { length: length }).map(Number.call, Number);
//   const abcRange = (length) =>
//     range(length).map((num) => String.fromCharCode(97 + num));
//   let list;

//   beforeEach(() => {
//     list = new LinkedList();
//   });

//   test("constructor", () => {
//     expect(list).toEqual(expect.any(LinkedList));
//   });

//   test("push", () => {
//     abcRange(26).map((character) => list.push(character));
//     expect(list.length).toEqual(26);
//   });

//   test("pop", () => {
//     abcRange(13).map((character) => list.push(character));
//     expect(list.length).toEqual(13);
//     range(10).map(() => list.pop());
//     expect(list.length).toEqual(3);
//     expect(list.pop()).toEqual("c");
//   });

//   test("get", () => {
//     list.push("first");
//     expect(list.get(0)).toEqual("first");
//     list.push("second");
//     expect(list.get(1)).toEqual("second");
//     expect(list.get(0)).toEqual("first");
//     abcRange(26).map((character) => list.push(character));
//     expect(list.get(27)).toEqual("z");
//     expect(list.get(0)).toEqual("first");
//     expect(list.get(9)).toEqual("h");
//     list.pop();
//     expect(list.get(list.length - 1)).toEqual("y");
//   });

//   test("delete", () => {
//     abcRange(26).map((character) => list.push(character));
//     list.delete(13);
//     expect(list.length).toEqual(25);
//     expect(list.get(12)).toEqual("m");
//     expect(list.get(13)).toEqual("o");
//     list.delete(0);
//     expect(list.length).toEqual(24);
//     expect(list.get(0)).toEqual("b");
//   });
// });
