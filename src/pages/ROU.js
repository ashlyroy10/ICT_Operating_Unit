import React from 'react'
import HeaderROU from '../components/HeaderROU'
import { Link } from 'react-router-dom'

const ROU = () => {
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleValidation = () => {
    const courseType = document.getElementById('course-type').value;
    const project = document.getElementById('project').value;
    const batchCommencement = document.getElementById('batch-commencement').value;
    console.log(courseType+project+batchCommencement);
    if (courseType && project && batchCommencement) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div>
      <HeaderROU/>
      <div class='rou-container container font-link'>
        <div class ='rou-box bg-light'>
        <form class="was-validated">
          <div class="col-md mb-3">
            <label class="m-1">Course Type</label>
            <select id="course-type" class="form-select" required aria-label="select example">
              <option value="">Choose...</option>
              <option value="1">Long Term Training (LTT)</option>
              <option value="2">Micro Skills Training (MST)</option>
              <option value="3">Short Term Training (STT)</option>
            </select>
            <div class="invalid-feedback">Please select a valid course.</div>
          </div>
          <div class="col-md mb-3">
            <label class="m-1">Project</label>
            <select id="project" class="form-select" required aria-label="select example">
              <option value="">Choose...</option>
              <option value="1">KKEM</option>
              <option value="2">NORKA</option>
              <option value="3">ICTAK</option>
            </select>
            <div class="invalid-feedback">Please select a valid project.</div>
          </div>
          <div className='col-md mb-3 '>
            <label>Batch Commencement</label>
            <input id="batch-commencement" type="date" class="form-control w-50 mx-auto" min={new Date().toISOString().split('T')[0]} onChange={handleValidation} />
            <div class="invalid-feedback">Please select a date.</div>
          </div>
          <Link to={isFormValid ? '/course_details' : '#'}>
            <button type="button" className="btn btn-primary" disabled={!isFormValid}>Next</button>
          </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ROU;

