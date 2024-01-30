/**
 * @OBJECTS
 * In JavaScript, objects are complex data structures that can store multiple values as key-value pairs.
   Objects are widely used for organizing and managing data.

   @OBJECTSYNTAX
   Objects are defined using curly braces {} and contain one or more key-value pairs.
Example:
let person = {
  name: "John",
  age: 30,
  isStudent: false
};

Accessing Object Properties

You can access object properties using dot notation or square brackets.
Example:
console.log(person.name); // John
console.log(person["age"]); // 30
: Object Methods

Object Methods

Object methods are functions that are stored as values in object properties.
They allow you to perform actions on the object's data.
Defining Object Methods

Example:
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};
Invoking Object Methods

You can call object methods using dot notation.
Example:
person.greet(); // Hello, John!
Title 3: Array Methods

What are Array Methods?

Array methods are built-in functions that you can use to perform various operations on arrays.
Common Array Methods

push() and pop()

push() adds elements to the end of an array, and pop() removes the last element.
shift() and unshift()

shift() removes the first element, and unshift() adds elements to the beginning of an array.
concat()

concat() is used to merge two or more arrays.
slice()

slice() extracts a portion of an array into a new array.
forEach()

forEach() iterates over array elements and applies a function to each.
Example: Using forEach()

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2);
});
Key Takeaways:

Objects are a fundamental data structure in JavaScript, used for storing key-value pairs.
Object methods are functions that are stored as properties in objects.
Array methods provide convenient ways to manipulate and work with arrays in JavaScript.
Title 4: Practical Examples

Example 1: Working with Objects

// Object methods
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

person.greet();
Example 2: Array Methods

// Array methods
let numbers = [1, 2, 3, 4, 5];

// Using forEach to double each number
numbers.forEach(function(number) {
  console.log(number * 2);
});
Example 3: Array Manipulation

// Array manipulation
let fruits = ["apple", "banana", "cherry"];

// Adding elements
fruits.push("date");
fruits.unshift("kiwi");

// Removing elements
fruits.pop();
fruits.shift();
Key Takeaways:

Practical examples help solidify your understanding of objects and array methods.
Experiment with different scenarios to master these concepts.
Objects and arrays are crucial for data management and manipulation in JavaScript.
 */

//CHALLENGE GROUPBY
// const people = [
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Bob', age: 30, city: 'Chicago' },
//     { name: 'Charlie', age: 35, city: 'New York' },
//     { name: 'Dave', age: 40, city: 'Chicago' },
//   ];

  
//  const groupBy = (arr,property) => {
//     let results = {};
  
//      for (item of people) {
//        const groupByValue = item[groupByProperty];
  
//       if (results[groupByValue]) {
//          results[groupByValue].push(item);
//       } else {
//         results[groupByValue] = [item];
//        }
//     }
  
//      return results;
//    };

//    console.log(people[people.push])

 // const result = Object.groupBy(people, ({ city }) => city);

//  let person = {
//   name : 'John',
//   age : 30,
//   school :'Zindua School',
//   personalities : ['kind', 'humble', 'hardworking'],
//   stubborn : false,
//   hobbies : {
//     indoor : ['reading', 'cooking'],
//     outdoor : ['swimming' , 'hiking']
//   },
//   sound : function () {
//     return 'I am a human being'
//   }
//  }

// // console.log(person.sound())

// console.log(person.hobbies.indoor[1])

  //console.table(Object.keys(person))
  //console.table(Object.values(person))


  let people = [
    {
      name: 'Alice',
      age: 23,
      city: 'Nairobi'
    },
    {
      name: 'Bob',
      age : 30,
      city: 'Chicago'
    },
    {
      name: 'Dave',
      age: 27,
      city : 'London'
    }
  ]

  // function printPeople(){
  //   for (let i = 0; i < people.length; i++){
  //     console.log(people[i].name)
  //   }
  // }

  // printPeople()

  // function findPerson(name){
  //   for (let i = 0; i < people.length; i++){
  //     if (people[i].name)
  //   }
  // }
  const groupBy = (arrayOfObjects, groupByProperty) => {
    let grouped = {}
  
    for (let i = 0; i < people.length; i++) {
    let person = arrayOfObjects [i]
    let key = person [groupByProperty]
    
    if (!grouped[key]){
      grouped[key] = [person]
    } else {
      grouped[key].push [person]
    }
  }
  return grouped
  }
  const person='Dan'
 console.log(groupBy(people, 'city')) 