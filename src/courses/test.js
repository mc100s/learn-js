import React from 'react';
// import CodeSandbox from '../components/CodeSandbox';
import Editor from '../components/Editor';

export default {
  title: "Test",
  content: (

    <div>

      <Editor value={`
function f(a,b) {
  return a + b;
}
`}
      />
    </div>

  )
};