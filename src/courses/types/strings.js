import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
      title: "Strings",
      content: (

            <div>

                  JavaScript strings share many similarities with string implementations from other high-level languages. They represent text based messages and data. <br /><br />

                  In this course we will cover the basics. How to create new strings and perform common operations on them.<br /><br />

                  You can define strings in JavaScript by enclosing the text in single quotes or double quotes:
            
      <Editor value={`
// Single quotes can be used
var str = 'Our lovely string';

// Double quotes as well
var otherStr = "Another nice string";
      `} />

                  In Javascript, Strings can contain UTF-8 characters:
            
      <Editor value={`"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"`} />

                  And emojis:
      <Editor value={`
var menu = "Hamburger 🍔";
var state = "Happy 😀";
`} />

                  <h3>Concatenation</h3>

                  Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings. This is done in JavaScript using the <code>+</code> operator.
            
            
      <Editor value={`var bigStr = 'Hi ' + 'JS strings are nice ' + 'and ' + 'easy to add';`} />


                  <h3>Length</h3>

                  It's easy in Javascript to know how many characters are in string using the property <code>.length</code>.
            
      <Editor value={`
// Just use the property .length
var size = 'Our lovely string'.length;
`} />

                  And emojis:
<Editor value={`
var menu = "Hamburger 🍔";
var state = "Happy 😀";
`} />

                  <h3>Accessing a specific character</h3>

                  You can access a specific character by writing <code>myString[indexOfCharacter]</code>. <code>indexOfCharacter</code> represents the position of the character, <code>0</code> means the first character, <code>1</code> the second, etc.
            
      <Editor value={`
var str = "World";
console.log(str[0]); // => "W"
console.log(str[1]); // => "o"
console.log(str[2]); // => "r"
console.log(str[3]); // => "l"
console.log(str[4]); // => "d"
`} />

                  <CodeSandbox slug="strings/operators" initialCodeContent={`
// Create variables firstName, lastName, str and greetings
`} testContent={`
// Tests for firstName and lastName
var fullName = firstName + " " + lastName;
testEquality(fullName, "Steve Jobs")

// Test for str 
testEquality(str.length, 7)

// Test for greetings 
greetings += 'world!'
testEquality(greetings, 'Hello world!')
`} />

            </div>

      )
};