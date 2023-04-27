import React from 'react'
import HeaderCOU from './HeaderCOU'
import { Link } from 'react-router-dom'

const SubmitCOU = () => {
  return (
    <div>
        <HeaderCOU/>
        <div class='submit-container container font-link'>
            <div class ='submit-box bg-light'>	
                <h6 m-1>Is Certificate to be issued from ICTAK?</h6>
                <div class="form-check form-check-inline m-1">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">Yes  </label>
                </div>
                <div class="form-check form-check-inline mb-4">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
                <h6>Syllabus/Curriculum</h6>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02"/>
                </div>
                <div class="form-floating mt-4">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Any Comments</label>
                </div>
                <Link to={'/corporate_ou/course_details'}><button type = "button" className="btn btn-primary ">Back</button></Link>
                <Link to={'/corporate_ou/submit'}><button type = "button" className="btn btn-primary ">Submit</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SubmitCOU