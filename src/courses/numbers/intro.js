import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Numbers",
  content: (

    <div>

      JavaScript has <strong>only one type of numbers</strong> – 64-bit float point. It's the same as Java's double. Unlike most other programming languages, there is no separate integer type, so <code>1</code> and  <code>1.0</code> are the same value. <br /><br />

      In this chapter, we'll learn how to create numbers and perform operations on them (like additions and subtractions).

      <CodeSandbox slug="numbers/intro" initialCodeContent={`
// Create a variable answer and pi with the right values so you can pass the tests
`} testContent={`
// Tests
testEquality(answer, 42);
testEquality(pi, 3.1416);
`} />
    </div>

  )
};