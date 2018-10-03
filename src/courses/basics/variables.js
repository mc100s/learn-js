import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Variables",
  content: (

    <div>

      In JavaScript, like in most programming languages, you can save values in what we call <strong>variables</strong>.  <br /><br />


      To create them, you can use the keyword <code>var</code> and to display them, you can use <code>console.log()</code>

      <Editor value={`
var myVariable1 = 42;
var myVariable2 = "Hello world!";

console.log(myVariable1); // => 42
console.log(myVariable2); // => "Hello world!"
`}
      />

      The general rules for constructing names for variables (unique identifiers) are:
      <ul>
        <li>Names can contain letters, digits, underscores (<code>_</code>), and dollar signs (<code>$</code>)</li>
        <li>Names can't start with a digit</li>
        <li>Names are case sensitive (<code>a</code> and <code>A</code> are different variables)</li>
        <li>Reserved words (like <code>var</code>) cannot be used as names</li>
      </ul>

      Most of JavaScript developers use the CamelCase notation. When you have to write a variable name with multiple words, you start new words with a capitalize letter. This is the convention we will follow during this course.

      <CodeSandbox slug="basics/variables" initialCodeContent={`
// Based on the tests, you should create a variable myNumber with the value 38

`} testContent={`// Tests
testEquality(myNumber, 38);`} />

    </div>

  )
};