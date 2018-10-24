import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Arrays",
  content: (

    <div>

      Arrays are a fundamental part of programming. An array is a list of data. We can store a lot of data in one variable, which makes our code more readable and easier to understand. It also makes it much easier to perform functions on related data. <br /><br />

      The data in arrays are called <strong>elements</strong>. <br /><br />

      Here is a simple array:

      <Editor value={`
// 1, 1, 2, 3, 5, and 8 are the elements in this array
var numbers = [1, 1, 2, 3, 5, 8];
      `} />



      <h3>Indices</h3>

      So you have your array of data elements, but what if you want to access a specific element?That is where indices come in. An index refers to a spot in the array. indices logically progress one by one, but it should be noted that the first index in an array is 0, as it is in most languages. Brackets <code>[]</code> are used to signify you are referring to an index of an array.

      <Editor value={`
// This is an array of strings
var fruits = ["apple", "banana", "pineapple", "strawberry"];

// We set the variable banana to the value of the second element of
// the fruits array. Remember that indices start at 0, so 1 is the
// second element. Result: banana = "banana"
var banana = fruits[1];
      `} />

      <CodeSandbox slug="types/arrays-1" initialCodeContent={`
var cars = ["Mazda", "Honda", "Ford", "Tesla"];
var honda = cars[/* Write the proper number */]
var ford = 
var chevy = 
var mazda = 

var fruits = [/* Write enough elements */]
      `} testContent={`
// Tests for cars
testEquality(honda, "Honda");
testEquality(ford, "Ford");
testEquality(mazda, "Mazda");
testEquality(tesla, "Tesla");

// Tests for fruits
testEquality(fruits[1], "Mango");
testEquality(fruits[3], "Orange");
      `} />



      <h3>Length</h3>

      Arrays have a property called length, and it's pretty much exactly as it sounds, it's the length of the array.

      <Editor value={`
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
var nbOfPlanets = planets.length; // => 8
      `} />


      <CodeSandbox slug="types/arrays-2" initialCodeContent={`
var array1 = 
var array2 = 
      `} testContent={`
// Tests
testEquality(array1.length, 4);
testEquality(array2.length, 2);
      `} />


      <h3>Push</h3>

      You can insert elements inside an array with their method <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>push</code></a>. To use it, you just need to write <code>myArray.push(value)</code>, it will insert elements in the end.


      <Editor value={`
var animals = ['pigs', 'goats', 'sheep'];

animals.push('cows');
console.log(animals);
// => ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]
      `} />



      <CodeSandbox slug="types/arrays-3" initialCodeContent={`
var fruits = ['strawberry'];
// TODO: use the method push to pass the tests
      `} testContent={`
// Tests
testEquality(fruits.length, 4);
testEquality(fruits[0], 'strawberry');
testEquality(fruits[2], 'banana');
      `} />

    </div>

  )
};