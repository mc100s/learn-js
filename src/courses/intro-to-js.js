import React from 'react';
import CodeSandbox from '../components/CodeSandbox';

export default {
  title: "Introduction to Javascript",
  content: (

    <div>

      In this course, we will learn the basics of JavaScript.

      <br /><br />


      On most of the courses, you will have to write some code in the "<strong>Input</strong>" field. On this first page, you just need to write:

      <br /><br />
      <code>var x = 42</code>
      <br /><br />


      and then click on "<strong>Run</strong>".
      <br /><br />
      If you are connected, you should see your number of points increase in the navbar.


      <CodeSandbox slug="into-to-js" initialCodeContent={``} testContent={`// Test to make sure that x is equl to 42
testEquality(x, 42);`} />


    </div>

  )
};