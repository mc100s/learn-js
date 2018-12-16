import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Button
} from 'reactstrap';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: `for (let x = 0; x < 42; x++) {
  
      } `
    }
  }
  onLoad() {
    console.log("onLoad");
  }
  onChange = (code, x) => {
    console.log("onChange", code, x);
    this.setState({
      code: code
    })
  }

  render() {
    return (
      <div className="Home text-center">
        <div className="hero">
          <div className="container">
            <h1 className="">Learn Programming with JavaScript</h1>

            {/* <ul>
            <li>Small Courses</li>
            <li>Interactive Exercises</li>
            <li>Free</li>
          </ul> */}

            <div className="row properties align-items-center">
              <div className="col-md-4">Small Courses</div>
              <div className="col-md-4">Interactive Exercises</div>
              <div className="col-md-4">Free</div>
            </div>

            <div className="my-5">
              <Button color="primary" tag={Link} to="/course/intro/intro-to-js" size="lg" >Go to the first course</Button>
            </div>
          </div>
        </div>

        <section className="container">
          <h2>Why JavaScript?</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              JavaScript is currently the most popular languages for developers according to <a href="https://insights.stackoverflow.com/survey/2018/#most-popular-technologies">the Developer Survey 2018 from StackOverflow</a>.
              <br /><br />
              JavaScript gives you the tools to create awesome websites! When you master it, you can do front-end web development, back-end web development or even mobile development.
              <br /><br />
              Then when you master one programming language, all other are easier to get and let you understand things way faster.
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="/images/most-popular-technologies.png" alt="" />
            </div>
          </div>
        </section>

        <section className="container">
          <h2>The methodology</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Theory</h3>
              <img className="img-fluid" src="/images/screenshot-course.png" alt="screenshot-course" />
            </div>
            <div className="col-md-4">
              <h3>Exercises</h3>
              <img className="img-fluid" src="/images/screenshot-input.png" alt="screenshot-input" />
            </div>
            <div className="col-md-4">
              <h3>Feedback</h3>
              <img className="img-fluid" src="/images/screenshot-output.png" alt="screenshot-output" />
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Your instructor</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="img-fluid img-instructor" src="/images/maxence.jpeg" alt="maxence" />
            </div>
            <div className="col-md-6">
              Maxence dived into code and web development since he was 14. He has a diverse experience in the tech ecosystem where we worked for many companies as a freelancer and launched a startup project.
              <br /><br />
              He is now a Lead Instructor at Ironhack where is obsession is to train beginners to become web developers.
              <br /><br />
              We wrote the course and the exercises so you can learn good practices in a playful environment.
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Are you ready?</h2>
          <div className="my-5">
            <Button color="primary" tag={Link} to="/course/intro/intro-to-js" size="lg" >Go to the first course</Button>
          </div>
        </section>


        {/* 
        Change typo
        Do a landing page
        The content learned during the course
        */}


        {/* <h2 className="mt-5">Developed by</h2>
        <div className="my-3">
          <img src="/images/ironhack-logo.png" alt="" style={{ maxWidth: "50%", width: 150 }} />
        </div> */}
      </div>
    );
  }
}

export default Home;
