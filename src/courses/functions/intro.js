import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Functions",
  content: (

    <div>
      Functions, like variables, must be declared. Let's declare a function <code>double</code> that accepts an <strong>argument</strong> called <code>x</code> and <strong>returns</strong> the double of x :

      <Editor value={`
function double(x) {
  return 2 * x;
}

var y = double(7); // => y = 14
var z = double(-4); // => z = -8
`}
      />

      This function <code>double</code> takes as an input a number and gives as an output a number. <br /><br />

      You can create more complex functions with multiple parameters.
      <Editor value={`
// This function takes 2 values and returns the sum
function sum(a,b){
  return a + b;
}

// This function takes an array and returns its maximum
function findMaxiumumInArray(array) {
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

console.log(sum(35, 7)); // => 42
console.log(findMaxiumumInArray([3,7,9,4,2,7])); // => 9
`}
      />

      Be careful, <code>return</code> and <code>console.log()</code> are different:
      <ul>
        <li><code>return</code> is the output of the function, it can be saved in a variable but it's not displayed</li>
        <li><code>console.log()</code> is a function to display elements and it can't be saved in a variable</li>
      </ul>

      <Editor value={`
function f1(age) {
  if (age < 18) {
    console.log("You can't enter the bar");
  }
  else {
    console.log("Take a beer!");
  }
}

var age = 26;

// BAD PRACTICE
var res1 = f1(age); // Display "Take a beer!"
console.log(res1); // Display "undefined"

// GOOD PRACTICE
var res2 = f2(age);
console.log(res2); // Display "Take a beer!"
`}
      />

      <CodeSandbox slug="functions/intro" initialCodeContent={`
// TODO: fix findMaxiumumInArray so it also works if the array contains only negative values
function findMaxiumumInArray(array) {
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
`} testContent={`// Tests
testEquality(findMaxiumumInArray([3,7,9,4,2,7]), 9);
testEquality(findMaxiumumInArray([-1]), -1);
testEquality(findMaxiumumInArray([-3,-7,-9,-4,-2,-7]), -2);
testEquality(findMaxiumumInArray([-87,-42]), -42);
`}
      />
    </div>

  )
};