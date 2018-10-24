import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "For loop",
  content: (

    <div>

      Loops are repetitive conditions where one variable in the loop changes. Loops are handy, if you want to run the same code over and over again, each time with a different value. <br /> <br />

      The easiest form of a loop is the <code>for</code> statement. This one has a syntax that is similar to an <code>if</code> statement, but with more options:

      <Editor value={`
for (initialization; endCondition; change){
  // instructions to execute
}
`}
      />

      For example, we can use a <code>for</code> loop to create a count down:
      <Editor value={`
for (var n = 5; n >= 0; n--){
  if (n > 0) {
    console.log(n);
  }
  else {
    console.log("Happy New Year!");
  }
}

// 5
// 4
// 3
// 2
// 1
// Happy New Year!
`}
      />

      <h3>For and arrays</h3>

      The <code>for</code> statement is used a lot to iterate on each element of an array.

      <Editor value={`
var colors = ['red', 'yellow', 'green', 'blue'];
for (var i = 0; i < colors.length; i++){
  console.log('The color ' + i + ' is: ' + colors[i]);
}

// The color 0 is: red
// The color 1 is: yellow
// The color 2 is: green
// The color 3 is: blue
`}
      />

      It can be also used to create arrays:

<Editor value={`
var size = 5;
var array = [];
for (var i = 0; i < 5; i++){
  array.push('X');
}
console.log(array);
// => ['X','X','X','X','X']
`}
      />




      <CodeSandbox slug="loops/for" initialCodeContent={`
// Using a for-loop, create a variable named message that equals the concatenation of integers (0, 1, 2, ...) from 0 to 99 (included).
var message = "";


`} testContent={`// Tests
testEquality(message, "0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899");`}
      />

    </div>

  )
};