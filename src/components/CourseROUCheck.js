import React from 'react'
import '../assets/css/style.css'
import HeaderROU from './HeaderROU'
import { Link } from 'react-router-dom'

const CourseROUCheck = () => {
    
  return (
    <div>
      <HeaderROU/>
      <div className="submit-container container font-link">
        <div className="submit-box bg-light">
        <h4>List of Courses</h4>
        <h6>select the required courses (max 4)</h6>
        <div class="table-responsive">
          <table class="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input class="form-check-input" type="checkbox"/></th>
                <td>Robotic Process Automation - RPA</td>
              </tr> 
              <tr>
                <th scope="row"><input class="form-check-input" type="checkbox"/></th>
                <td>Search Engine Optimization - SEO</td>
              </tr>
              <tr>
                <th scope="row"><input class="form-check-input" type="checkbox"/></th>
                <td>Python</td>
              </tr>
              <tr>
                <th scope="row"><input class="form-check-input" type="checkbox"/></th>
                <td>REACT</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to={'/retail_ou'}><button type = "button" className="btn btn-primary ">Back</button></Link>
        <Link to={'/retail_ou/courses/course_details'}><button type = "button" className="btn btn-primary ">Next</button></Link>
      </div>
      </div>
    </div>
  )
}

export default CourseROUCheck