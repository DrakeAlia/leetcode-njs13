// ArrayList:

// We are going to approximate an implementation of ArrayList. In JavaScript terms, that means
// we are going to implement an array using objects. You should not use arrays at all
// in this exercise, just objects. Make a class (or constructor function; something
// you can call new on) called ArrayList.
// ArrayList should have the following properties (in addition to whatever properties you create):

// length - integer  - How many elements in the array
// push   - function - accepts a value and adds to the end of the list
// pop    - function - removes the last value in the list and returns it
// get    - function - accepts an index and returns the value at that position
// delete - function - accepts an index, removes value from list,
// collapses, and returns removed value

// As always, you can change describe to xdescribe to prevent the unit tests from running
// while you work

class ArrayList {
  // code goes here
// use constructor() to instantiate all your variables because it's called when you create a new instance of the class
  constructor() {
    // instantiate all your variables here:
    // data is an object that will hold all the values in the array
    this.data = {};
    this.length = 0;
  }
  push(value: any) {
    // add an item to the end of the array
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    // remove the last item of the array and returns it
    const response = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return response;
  }
  get(index) {
    // returns that item from the array
    return this.data[index];
  }
  delete(index) {
    // removes item from the array and collapses the array
    const response = this.data[index];
    this._collapseTo(index);
    return response;
  }
  _collapseTo(index) {
    // helper function to remove an item from the array
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// Time Complexity: O(1) for push, pop, and get. O(n) for delete because we have to loop through the array.
// Space Complexity: O(1) because we're not creating any new data structures.

// Test cases:
// const list = new ArrayList();
// list.push("first");
// list.push("second");
// list.push("third");
// console.log(list.get(0)); // "first"
// console.log(list.pop()); // "third"
// console.log(list.get(1)); // "second"
// console.log(list.delete(0)); // "first"
// console.log(list.get(0)); // "second"


// unit tests
// do not modify the below code
// describe.skip("ArrayList", function () {
//   const range = (length) =>
//     Array.apply(null, { length: length }).map(Number.call, Number);
//   const abcRange = (length) =>
//     range(length).map((num) => String.fromCharCode(97 + num));
//   let list;

//   beforeEach(() => {
//     list = new ArrayList();
//   });

//   test("constructor", () => {
//     expect(list).toEqual(expect.any(ArrayList));
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
