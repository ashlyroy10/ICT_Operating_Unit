import React from 'react'
import '../assets/css/style.css'
import HeaderROU from './HeaderROU'
import { Link } from 'react-router-dom'

const CourseROUTest = () => {
  return (
    <div>
        <HeaderROU/>
      <div class='course-container container font-link'>
        <div class ='course-box bg-light'>
            <div class="row g-4 mb-3">
                <div class="col-md-8">
                    <h6>Courses</h6>
                    <select class="form-select" id="floatingSelectGrid">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md">
                    <h6>No. of Batches</h6>
                    <select class="form-select" id="floatingSelectGrid">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-md-2">
                    <h6>Batch - 1</h6>
                    <h6>Details</h6>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option selected>Select</option>
                            <option value="1">20-30</option>
                            <option value="2">31-40</option>
                            <option value="3">41-50</option>
                            <option value="3">51-60</option>
                            <option value="3">61-70</option>
                            <option value="3">71-100</option>
                            <option value="3">101-150</option>
                            <option value="3">NA</option>
                        </select>
                        <label for="floatingSelectGrid">Batch Size</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option selected>Select</option>
                            <option value="1">Online</option>
                            <option value="2">Offline</option>
                            <option value="3">NA</option>
                        </select>
                        <label for="floatingSelectGrid">Delivery Mode</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <input type="time" class="form-control"/>
                        <label for="floatingSelectGrid">Batch Timing</label>
                    </div>
                </div>

            </div>
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

export default CourseROUTest