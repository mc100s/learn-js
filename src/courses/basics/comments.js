import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Comments",
  content: (

    <div>

      Comments are statements that will not be executed by the interpreter, comments are used to mark annotations for other programmers or small descriptions of what your code does, thus making it easier for others to understand what your code does. <br /> <br />

      In Javascript, comments can be written in 2 different ways: <br /><br />

      <strong>1) Line starting with <code>{'//'}</code></strong>

      <Editor value={`
// This is a comment, it will be ignored by the interpreter
var a = "this is a variable defined in a statement";
`}
      />

      <strong>2) Section of code starting with <code>{'/*'}</code> and ending with <code>{'*/'}</code>, this method is used for multi-line comments:</strong>


      <Editor value={`
/*
This is a multi-line comment,
it will be ignored by the interpreter
*/
var a = "this is a variable defined in a statement";
`}
      />

      <div className="alert alert-success">On most text editors (including on this website), you can write comments by typing <kbd>Ctrl + /</kbd> or <kbd>Ctrl + Shift + /</kbd></div>

      <CodeSandbox slug="basics/comments" initialCodeContent={`
comment me with //

comment 
me 
with / *  and * /

`} testContent={`// Tests
testEquality(true, true);`} />


    </div>

  )
};