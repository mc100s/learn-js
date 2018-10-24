import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Condition if/else",
  content: (

    <div>

      Conditions are an essential part of a programing language. It let you execute instructions only when some conditions are verified.  <br /><br />

      <h3>Example</h3>

      Let's see an example with the most important kind of conditions: <code>if</code> and <code>else</code>.


      <Editor value={`
var gender = 'female';
var name = 'Smith';
var sentence;

// Check if the gender is equal to 'male'
if (gender === 'male') {
  // Code NOT exectued because the condition is false
  sentence = 'Hello Mr ' + name; 
}
else {
  // Code exectued because the other condition was not true
  sentence = 'Hello Mrs ' + name;
}

console.log(sentence); // 'Hello Mrs Smith'
`}
      />

      The previous code could be also written this way:
      <Editor value={`
var gender = 'female';
var name = 'Smith';
var sentence;

// A first "if" statement
if (gender === 'male') {
  sentence = 'Hello Mr ' + name; 
}
// A second "if" statement
if (gender === 'female') {
  sentence = 'Hello Mrs ' + name;
}

console.log(sentence); // 'Hello Mrs Smith'
`}
      />

      Or this way, with <code>else if</code>:

      <Editor value={`
var gender = 'female';
var name = 'Smith';
var sentence;

// A first "if" statement
if (gender === 'male') {
  sentence = 'Hello Mr ' + name; 
}
// This condition is checked only if the first one was false
else if (gender === 'female') { 
  sentence = 'Hello Mrs ' + name;
}

console.log(sentence); // 'Hello Mrs Smith'
`}
      />


      <h3>General syntax</h3>

      <Editor value={`
if (aConditionToTest) {
  // ...
}
else if (anotherConditionToTestIfTheFirstOneFailed) { // Optional
  // ...
}
else if (anotherConditionToTestIfThe2FirstOnesFailed) { // Optional
  // ...
}
else { // Optional
  // ...
}
`}
      />

      <h3>Comparators</h3>

      Let's now focus on the conditional part:
      <Editor value={`
if (gender === 'male') {
  // ...
}
`}
      />

      The conditional part is the variable <code>country</code> followed by the three equal signs (<code>===</code>). Three equal signs tests if the variable <code>country</code> has both the correct value (<code>France</code>) and also the correct type (<code>String</code>). You can test conditions with double equal signs, too, however a conditional such as <code>if (x == 5)</code> would then return true for both <code>var x = 5;</code> and <code>var x = "5";</code>. Depending on what your program is doing, this could make quite a difference.  It is highly recommended as a best practice that you always compare equality with three equal signs (<code>===</code> and <code>!==</code>) instead of two (<code>==</code> and <code>!=</code>). <br /><br />

      Other conditional tests:
      <ul>
        <li><code>{`x > a`}</code>: is x bigger than a?</li>
        <li><code>{`x < a`}</code>: is x less than a?</li>
        <li><code>{`x <= a`}</code>: is x less than or equal to a?</li>
        <li><code>{`x >=a`}</code>: is x greater than or equal to a?</li>
        <li><code>{`x != a`}</code>: is x not a?</li>
        <li><code>{`x`}</code>: does x exist?</li>
      </ul>

      <h3>More complex condtions with <code>&&</code> (AND) <code>||</code> (OR)</h3>

      Furthermore you can concatenate different conditions with "or" or “and" statements, to test whether either statement is true, or both are true, respectively. <br /><br />

      In JavaScript "AND" is written as <code>&&</code> and "OR" is written as <code>||</code>.

      Say you want to test if the value of x is between 10 and 20 (excluded), you could do that with a condition stating:

      <Editor value={`
if (x > 10 && x < 20) {
  // ...
}
`}
      />

      If you want to make sure that country is either "England" or "Germany" you use:
      <Editor value={`
if (country === 'England' || country === 'Germany') {
  // ...
}
`}
      />

      You can even group conditions with parenthesis:
      <Editor value={`
if ((name === 'Trump' && country === 'United-States') || (name === 'Macron' && country === 'France')) {
  console.log('Welcome Mr. President');
}
else {
  console.log('You are not allowed');
}
`}
      />

      <CodeSandbox slug="conditions/ifelse" initialCodeContent={`
// Write the right variables to pass the tests

`} testContent={`// Tests
var greetings, level, continent;

if (country === 'England' || country === 'United-States') {
  greetings = 'Hello';
}
else if (country === 'Brasil') {
  greetings = 'Olá';
}
else if (country === 'France') {
  greetings = 'Bonjour';
}
else {
  greetings = 'Hola';
}

if (yearsOfExperience <= 2) {
  level = 'junior';
}
else if (yearsOfExperience <= 5) {
  level = 'mid level';
}
else {
  level = 'senior';
}

if (country === 'England' || country === 'France' || country === 'Spain') {
  continent = 'Europe';
}
else if (country === 'United-States') {
  continent = 'North America';
}
else if (country === 'Colombia' || country === 'Brasil') {
  continent = 'South America';
}

var sentence = greetings + ', I am a ' + level + ' developer and I work in ' + continent;
testEquality(sentence, 'Hola, I am a mid level developer and I work in South America');`} />


    </div>

  )
};