import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "While loop",
  content: (

    <div>
      While Loops repetitively execute a block of code as long as a specified condition is true and the syntax is the following:

      <Editor value={`
while (condition){
  // do it as long as condition is true
}
`}
      />

      For example, the loop in this example will repetitively execute its block of code as long as the variable i is less than 5:
      <Editor value={`
var i = 0, x = "";
while (i < 5) {
  x = x + "The number is " + i;
  i++;
}
`}
      />

      <CodeSandbox slug="loops/while" initialCodeContent={`
// Using a while loop, add "!" so the str contains excatly 20 characters
var message = "Hello";
while (...) {
  ...
}
`} testContent={`// Tests
testEquality(message, "Hello!!!!!!!!!!!!!!!");`}
      />
    </div>

  )
};