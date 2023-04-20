import React from 'react'
import HeaderROU from '../components/HeaderROU'
import { Link } from 'react-router-dom'

const ROU = () => {
  return (
    <div>
      <HeaderROU/>
      <div class='rou-container container font-link'>
        <div class ='rou-box bg-light'>	
          <h5>Course Type</h5>
          <div class="input-group mb-3">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Long Term Training (LTT)</option>
              <option value="2">Micro Skills Training (MST)</option>
              <option value="3">Short Term Training (STT)</option>
            </select>
          </div>
          <h6>Project</h6>
          <div class="input-group mb-3">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">KKEM</option>
              <option value="2">NORKA</option>
              <option value="3">ICTAK</option>
            </select>
          </div>
          <h6>Batch Commencement</h6>
          <div className='row mb-3 '>
              <input type="date" class="form-control w-50 mx-auto" />
          </div>
          <Link to={'/course_details'}>
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

export default ROU
