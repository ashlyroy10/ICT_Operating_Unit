import React from 'react'
import HeaderCOU from '../components/HeaderCOU'
import { Link } from 'react-router-dom'

const COU = () => {

  return (
    <div>
      <HeaderCOU/>
      <div class='rou-container container font-link'>
        <div class ='rou-box bg-light'>
        <form>
          <div class="col-md mb-3">
            <h6 m-1>Email</h6>
            <input type="text" class="form-control"></input>
          </div>
          <div class="col-md mb-3">
            <h6 m-1>Name of the client</h6>
            <input type="text" class="form-control"></input>
          </div>
          <div className='col-md mb-3 '>
            <h6 m-1>Batch Commencement</h6>
            <input id="batch-commencement" type="date" class="form-control w-50 mx-auto" min={new Date().toISOString().split('T')[0]}/>
            <div class="invalid-feedback">Please select a date.</div>
          </div>
          <Link to='/corporate_ou/course_details'><button type="button" className="btn btn-primary">Next</button></Link>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default COU