import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import {
  Button,
  Row,
  Col,
  Input,
  Alert
} from 'reactstrap';
import CandSanbox from '../CodeSandbox'

class Course extends Component {
  render() {
    let courseId = Number(this.props.match.params.courseId)
    return (
      <div className="Course">
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>Courses</h3>
          </div>

          <ul className="list-unstyled components">
            {/* <p>Dummy Heading</p> */}
            <li>
              <Link to="/course/1">Basics about Programming</Link>
            </li>
            <li>
              <Link to="/course/2">Variables types</Link>
            </li>
          </ul>
        </nav>
        <div className="content container">

          {courseId == 1 && (
          <div>
            <h2>Basics about Programming</h2>
            In this first chapter, we'll learn the basics of programming and the Javascript language.
Programming means writing code. A book is made up of chapters, paragraphs, sentences, phrases, words and finally punctuation and letters, likewise a program can be broken down into smaller and smaller components. For now, the most important is a statement. A statement is analogous to a sentence in a book. On its own, it has structure and purpose, but without the context of the other statements around it, it isn't that meaningful. <br/><br/>
A statement is more casually (and commonly) known as a line of code. That's because statements tend to be written on individual lines. As such, programs are read from top to bottom, left to right. You might be wondering what code (also called source code) is. That happens to be a broad term which can refer to the whole of the program or the smallest part. Therefore, a line of code is simply a line of your program.<br/><br/>
Here is a simple example:

            <CandSanbox initialCodeContent={`var hello = "Hello";
var world = "World";
var message = hello + " " + world;

console.log(message); // Display "Hello World"

// Goal, save "Berlin" inside the variable city
var city = "...";`} testContent={`// Tests
testEquality("Hallo " + city, "Hallo Berlin");`} />
          </div>
        )}

        {courseId == 2 && (
          <div>
            <h2>Variables types</h2>
            Computers are sophisticated and can make use of more complex variables than just numbers. This is where variable types come in. Variables come in several types and different languages support different types. <br/><br/>
            The most common types are: <br/>
            <ul>
              <li><strong>Number - Float</strong>: a number, like 1.21323, 4, -33.5, 100004 or 0.123</li>
              <li><strong>Numbers - Integer</strong>: a number like 1, 12, -33, 140 but not 1.233</li>
              <li><strong>String</strong>: a line of text like "boat", "elephant" or "damn, you are tall!"</li>
              <li><strong>Boolean</strong>: either true or false, but nothing else</li>
              <li><strong>Arrays</strong>: a collection of values like: 1,2,3,4,'I am bored now'</li>
              <li><strong>Objects</strong>: a representation of a more complex object</li>
              <li><strong>null</strong>: a variable that contains null contains no valid Number, String, Boolean, Array, or Object</li>
              <li><strong>undefined</strong>: the undefined value is obtained when you use an object property that does not exist, or a variable that has been declared, but has no value assigned to it.</li>
            </ul>

            JavaScript is a “loosely typed” language, which means that you don't have to explicitly declare what type of data the variables are. You just need to use the var keyword to indicate that you are declaring a variable, and the interpreter will work out what data type you are using from the context, and use of quotes.

            <CandSanbox initialCodeContent={`// Goal: create a variable a, b, c and d and try to pass the tests
var a = ...;
`} testContent={`// Tests
testEquality(a, 42);
testEquality(b, 3.5);
testEquality(c, "Ironhack");
testEquality(d, false);`} />
          </div>
        )}


        <hr/>
        {courseId > 1 && <Button className="float-left"  tag={Link} to={"/course/"+(courseId-1)}>&lt; Previous course</Button>}
        <Button className="float-right" tag={Link} to={"/course/"+(courseId+1)}>Next course &gt;</Button>
        </div>
      </div>
    );
  }
}

export default Course;
