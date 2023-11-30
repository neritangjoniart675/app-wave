/*
   Filename: SophisticatedCode.js
   Content: A complex and elaborate JavaScript code example demonstrating advanced programming concepts.
*/

// Declare a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create instances of the Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Create an array of persons
const people = [person1, person2];

// Iterate over the array and introduce each person
people.forEach(person => {
  person.introduce();
});

// Helper function to calculate the sum of an array
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate and log the sum of numbers
const sum = calculateSum(numbers);
console.log(`The sum of numbers is: ${sum}`);

// Simulate a long asynchronous process using a promise
const simulateAsyncProcess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Long process completed!");
    }, 3000);
  });
};

// Await the long process completion
const performAsyncTask = async () => {
  console.log("Starting long process...");
  const result = await simulateAsyncProcess();
  console.log(result);
};

performAsyncTask();