import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom' 
import {
  Button,
} from 'reactstrap';

const courses = require('../../courses/index').default

class Course extends Component {
  render() {
    let courseSlug = this.props.match.params.courseSlug
    let courseIndex = courses.findIndex(course => course.slug === courseSlug)
    let course = courses[courseIndex]

    return (
      <div className="Course">
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>Courses</h3>
          </div>

          <ul className="list-unstyled components">
            {courses.map(course => (
              <li>
                <NavLink to={"/course/"+course.slug}>{course.title}</NavLink>
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
}

export default Course;
