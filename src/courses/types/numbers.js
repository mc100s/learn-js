import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Numbers",
  content: (

    <div>

      JavaScript has <strong>only one type of numbers</strong> – 64-bit float point. It's the same as Java's double. Unlike most other programming languages, there is no separate integer type, so <code>1</code> and  <code>1.0</code> are the same value. <br /><br />

      In this chapter, we'll learn how to create numbers and perform operations on them (like additions and subtractions).

      <CodeSandbox slug="types/numbers-1" initialCodeContent={`
// Create a variable answer and pi with the right values so you can pass the tests
`} testContent={`
// Tests
testEquality(answer, 42);
testEquality(pi, 3.1416);
`} />

      <h3>Operators</h3>

      To play with numbers, you can use different operators. In the following example, we asume <code>a = 7</code> and <code>b = 2</code>. <br /><br />

      <table className="table table-sm">
        <tbody>
          <tr>
            <th>Operator</th>
            <th>Example</th>
            <th>Result</th>
            <th>Explanation</th>
          </tr>
          <tr>
            <td><code>+</code></td>
            <td><code>a + b</code></td>
            <td><code>9</code></td>
            <td>Addition</td>
          </tr>
          <tr>
            <td><code>-</code></td>
            <td><code>a - b</code></td>
            <td><code>5</code></td>
            <td>Soustraction</td>
          </tr>
          <tr>
            <td><code>*</code></td>
            <td><code>a * b</code></td>
            <td><code>14</code></td>
            <td>Multiplication</td>
          </tr>
          <tr>
            <td><code>/</code></td>
            <td><code>a / b</code></td>
            <td><code>3.5</code></td>
            <td>Division</td>
          </tr>
          <tr>
            <td><code>%</code></td>
            <td><code>a % b</code></td>
            <td><code>2</code></td>
            <td>Modulo (division remainder)</td>
          </tr>
          <tr>
            <td><code>++</code></td>
            <td><code>a++</code></td>
            <td><code>a === 8</code></td>
            <td>Increment by 1 (<code>a = a+1</code>)</td>
          </tr>
          <tr>
            <td><code>--</code></td>
            <td><code>a--</code></td>
            <td><code>a === 6</code></td>
            <td>Decrement by 1 (<code>a = a-1</code>)</td>
          </tr>
          <tr>
            <td><code>+=</code></td>
            <td><code>a += b</code></td>
            <td><code>a === 9</code></td>
            <td>Increment by addition (<code>a = a+b</code>)</td>
          </tr>
          <tr>
            <td><code>*=</code></td>
            <td><code>a *= b</code></td>
            <td><code>a === 14</code></td>
            <td>Increment by multiplication (<code>a = a*b</code>)</td>
          </tr>
        </tbody>
      </table>


      <CodeSandbox slug="types/numbers-2" initialCodeContent={`
// Create variables a, b, c and d
`} testContent={`
// Test for a
testEquality(a, 5);
a++;
testEquality(a, 6);

// Test for a and b
testEquality(a*b, 42);

// Test for c
testEquality(10%3, c);

// Test for d
d++;
testEquality(d, 2018);
`} />

    </div>

  )
};