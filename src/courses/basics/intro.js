import React from 'react';
import Editor from '../../components/Editor';
import CodeSandbox from '../../components/CodeSandbox';

export default {
  title: "Basics about Programming",
  content: (

    <div>

      In this first chapter, we'll learn the basics of programming and the Javascript language. <br /><br />

      Programming means writing code. A book is made up of chapters, paragraphs, sentences, phrases, words and finally punctuation and letters, likewise a program can be broken down into smaller and smaller components. For now, the most important is a statement. A statement is analogous to a sentence in a book. On its own, it has structure and purpose, but without the context of the other statements around it, it isn't that meaningful. <br /><br />

      A statement is more casually (and commonly) known as a line of code. That's because statements tend to be written on individual lines. As such, programs are read from top to bottom, left to right. You might be wondering what code (also called source code) is. That happens to be a broad term which can refer to the whole of the program or the smallest part. Therefore, a line of code is simply a line of your program.<br /><br />

      Here is a simple example:

      <Editor value={`
      var hello = "Hello";
var world = "World";

// Message equals "Hello World"
var message = hello + " " + world;
`} />

      <CodeSandbox slug="basics-about-programming" initialCodeContent={`var hello = "Hello";
var world = "World";
var message = hello + " " + world;

console.log(message); // Display "Hello World"

// Goal, save "Berlin" inside the variable city
var city = "...";`} testContent={`// Tests
testEquality("Hallo " + city, "Hallo Berlin");`} />

    </div>

  )
};