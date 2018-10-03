import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Numbers Creation",
  content: (

    <div>

      JavaScript has <strong>only one type of numbers</strong> – 64-bit float point. It's the same as Java's double. Unlike most other programming languages, there is no separate integer type, so 1 and 1.0 are the same value. <br /><br />

      In this chapter, we'll learn how to create numbers and perform operations on them (like additions and subtractions).



      <Editor value={`
var foo = 42;
var bar = 42;
var baz = "42";
var qux = "life";
`} />

      <code>foo == bar</code> will evaluate to <code>true</code> and <code>baz == qux</code> will evaluate to <code>false</code>, as one would expect. However, <code>foo == baz</code> will <em>also</em> evaluate to <code>true</code> despite <code>foo</code> and <code>baz</code> being different types. Behind the scenes the <code>==</code> equality operator attempts to force its operands to the same type before determining their equality. This is in contrast to the <code>===</code> equality operator. <br /> <br />

      The <code>===</code> equality operator determines that two variables are equal if they are of the same type <em>and</em> have the same value. With the same assumptions as before, this means that <code>foo === bar</code> will still evaluate to <code>true</code>,  but <code>foo === baz</code> will now evaluate to <code>false</code>. <code>baz === qux</code> will still evaluate to <code>false</code>.











        <CodeSandbox slug="basics-about-programming" initialCodeContent={`
// You can simply click on "Run" on see the results
`} testContent={`
// Tests
testEquality(42 == 42,            true);
testEquality(42 === 42,           true);
testEquality("42" == 42,          true);
testEquality("42" === 42,         false);
testEquality("Hello" === "Hello", true);
testEquality("Hello" === "hello", false);
`} />

    </div>

  )
};