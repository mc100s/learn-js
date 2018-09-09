import React from 'react';
import CodeSandbox from '../components/CodeSandbox';

export default {
  title: "Variable Types",
  content: (

    <div>

      Computers are sophisticated and can make use of more complex variables than just numbers. This is where variable types come in. Variables come in several types and different languages support different types. <br /><br />
      The most common types are: <br />
      <ul>
        <li><strong>Number - Float</strong>: a number, like 1.21323, 4, -33.5, 100004 or 0.123</li>
        <li><strong>Numbers - Integer</strong>: a number like 1, 12, -33, 140 but not 1.233</li>
        <li><strong>String</strong>: a line of text like "boat", "elephant" or "damn, you are tall!"</li>
        <li><strong>Boolean</strong>: either true or false, but nothing else</li>
        <li><strong>Arrays</strong>: a collection of values like: 1,2,3,4,'I am bored now'</li>
        <li><strong>Objects</strong>: a representation of a more complex object</li>
        <li><strong>null</strong>: a variable that contains null contains no valid Number, String, Boolean, Array, or Object</li>
        <li><strong>undefined</strong>: the undefined value is obtained when you use an object property that does not exist, or a variable that has been declared, but has no value assigned to it.</li>
      </ul>

      JavaScript is a “loosely typed” language, which means that you don't have to explicitly declare what type of data the variables are. You just need to use the var keyword to indicate that you are declaring a variable, and the interpreter will work out what data type you are using from the context, and use of quotes.
      
<CodeSandbox slug="variable-types" initialCodeContent={`// Goal: create a variable a, b, c and d and try to pass the tests
var a = ...;
`} testContent={`// Tests
testEquality(a, 42);
testEquality(b, 3.5);
testEquality(c, "Ironhack");
testEquality(d, false);`} />

    </div>

  )
};