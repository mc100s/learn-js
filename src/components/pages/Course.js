import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import {
  Button
} from 'reactstrap';
import { FaSquare } from 'react-icons/fa';

import { setCourseProgression } from '../../utils'

const courses = require('../../courses/index').default

class Course extends Component {
  render() {

    // let courseSlug = this.props.match.params.courseSlug
    let courseSlug = this.props.location.pathname.substr(8) // Remove of "/course/" from the location.pathname
    let courseIndex = courses.findIndex(course => course.slug === courseSlug)

    if (courseIndex === -1)
      courseIndex = 0

    let course = courses[courseIndex]

    return (
      <div className="Course">
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>Courses</h3>
          </div>

          <ul className="list-unstyled components">
            {courses.map(course => (
              <li key={course.slug} style={course.isNewPart ? {marginTop: 15} : {}}>
                <NavLink to={"/course/" + course.slug}> <FaSquare /> {course.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="content container">

          <h2>{course.title}</h2>
          {course.content}

          <hr />

          {courseIndex > 0 && <Button className="float-left" tag={Link} to={"/course/" + courses[courseIndex - 1].slug}>&lt; Previous course</Button>}
          {courseIndex < courses.length - 1 && <Button className="float-right" tag={Link} to={"/course/" + courses[courseIndex + 1].slug}>Next course &gt;</Button>}
        </div>
      </div>
    );
  }

  componentDidMount() {
    setCourseProgression(this.props.match.params.courseSlug, 1)
  }

  componentDidUpdate(prevProps) {
    setCourseProgression(this.props.match.params.courseSlug, 1)
  }
}

export default Course;
