import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
    title: "Introduction to Javascript",
    content: (

        <div>

            This course is based from <a href="https://gitbookio.gitbooks.io/javascript/content/">Learn Javascript made by Gitbook</a>. Ironhack adapted it a little so it has more exercises :)<br /><br />

            This book will teach you the basics of programming and Javascript. Whether you are an experienced programmer or not, this book is intended for everyone who wishes to learn the JavaScript programming language.<br /><br />

            On most of the courses, you will have to write some code in the "<strong>Input</strong>" field. On this first page, you just need to write:
      
      <Editor value={`var x = 42;`}></Editor>


            and then click on "<strong>Run</strong>".
      <br /><br />
            If you are connected, you should see your number of points increase in the top navbar.
      
      
      <CodeSandbox slug="intro/into-to-js" initialCodeContent={``} testContent={`
// Test to make sure that x is equl to 42
testEquality(x, 42);
`} />


        </div>

    )
};