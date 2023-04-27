import React from 'react'
import '../assets/css/style.css'
import HeaderROU from './HeaderROU'
import { Link } from 'react-router-dom'

const SubmitROU = () => {
  return (
    <div>
        <HeaderROU/>
        <div class='submit-container container font-link'>
            <div class ='submit-box bg-light'>
              <h6>Please enter your valuable comments</h6>	
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Any  Comments</label>
                </div>
                <Link to={'/retail_ou/courses/course_details'}><button type = "button" className="btn btn-primary ">Back</button></Link>
                <Link to={'/retail_ou'}><button type = "button" className="btn btn-primary ">Submit</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SubmitROU