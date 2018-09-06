import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom' 
import Prism from "prismjs";
import {
  Button
} from 'reactstrap';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

import { getCourseProgression, setCourseProgression, getTotalCourseProgression } from '../../utils'

const courses = require('../../courses/index').default

class Course extends Component {
  render() {

    let courseSlug = this.props.match.params.courseSlug
    let courseIndex = courses.findIndex(course => course.slug === courseSlug)

    if (courseIndex === -1) 
      courseIndex = 0

    let course = courses[courseIndex]

    return (
      <div className="Course">
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>Courses - {getTotalCourseProgression()}</h3>
          </div>

          <ul className="list-unstyled components">
            {courses.map(course => (
              <li key={course.slug}>
                <NavLink to={"/course/"+course.slug}> {getCourseProgression(course.slug) ? <FaCheckSquare /> : <FaSquare/>} {course.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="content container">

          <h2>{course.title}</h2>
          {course.content}
        
          <hr/>

          {courseIndex > 0                && <Button className="float-left"  tag={Link} to={"/course/"+courses[courseIndex-1].slug}>&lt; Previous course</Button>}
          {courseIndex < courses.length-1 && <Button className="float-right" tag={Link} to={"/course/"+courses[courseIndex+1].slug}>Next course &gt;</Button>}
        </div>
      </div>
    );
  }

  componentDidMount() {
    setCourseProgression(this.props.match.params.courseSlug, 1) 
    Prism.highlightAll();
  }

  componentDidUpdate(prevProps) {
    setCourseProgression(this.props.match.params.courseSlug, 1) 
    if (this.props.match.params.courseSlug !== prevProps.match.params.courseSlug) {
      // We are on a new page
      Prism.highlightAll();
    }
  }
}

export default Course;
