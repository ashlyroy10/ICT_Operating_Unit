import React from 'react'
import '../assets/css/style.css'
import HeaderROU from './HeaderROU'
import { Link } from 'react-router-dom'

const CourseROU = () => {
  return (
    <div>
      <HeaderROU/>
      <div class='course-container container font-link'>
        <div class ='course-box bg-light'>	
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Courses</th>
                <th scope="col">No. of Batches</th>
                <th scope="col">Batch Size</th>
                <th scope="col">Delivery Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Data Science & Analytics (DSA)</th>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">No Batch</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">20-30</option>
                    <option value="2">31-40</option>
                    <option value="3">41-50</option>
                    <option value="3">51-60</option>
                    <option value="3">61-70</option>
                    <option value="3">70-100</option>
                    <option value="3">100-150</option>
                    <option value="3">NA</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                    <option value="3">NA</option>
                  </select>
                </td>
              </tr>
              <tr>
              <th scope="row">Search Engine Optimization (SEO)</th>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">No Batch</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">20-30</option>
                    <option value="2">31-40</option>
                    <option value="3">41-50</option>
                    <option value="3">51-60</option>
                    <option value="3">61-70</option>
                    <option value="3">70-100</option>
                    <option value="3">100-150</option>
                    <option value="3">NA</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                    <option value="3">NA</option>
                  </select>
                </td>
              </tr>
              <tr>
              <th scope="row">Python</th>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">No Batch</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">20-30</option>
                    <option value="2">31-40</option>
                    <option value="3">41-50</option>
                    <option value="3">51-60</option>
                    <option value="3">61-70</option>
                    <option value="3">70-100</option>
                    <option value="3">100-150</option>
                    <option value="3">NA</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                    <option value="3">NA</option>
                  </select>
                </td>
              </tr>
              <tr>
              <th scope="row">REACT</th>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">No Batch</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">20-30</option>
                    <option value="2">31-40</option>
                    <option value="3">41-50</option>
                    <option value="3">51-60</option>
                    <option value="3">61-70</option>
                    <option value="3">70-100</option>
                    <option value="3">100-150</option>
                    <option value="3">NA</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                    <option value="3">NA</option>
                  </select>
                </td>
              </tr>
              <tr>
              <th scope="row">R Programming</th>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">No Batch</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">20-30</option>
                    <option value="2">31-40</option>
                    <option value="3">41-50</option>
                    <option value="3">51-60</option>
                    <option value="3">61-70</option>
                    <option value="3">70-100</option>
                    <option value="3">100-150</option>
                    <option value="3">NA</option>
                  </select>
                </td>
                <td>
                  <select class="form-select">
                    <option selected>Select</option>
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                    <option value="3">NA</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={'/retail_ou'}>
            <button type = "button" className="btn btn-primary ">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 20 18">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg>
              Back</button>
          </Link>
          <Link to={'/submit'}>
            <button type = "button" className="btn btn-primary ">Next
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 11 20">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseROU