import React, { useState } from 'react'
import '../assets/css/style.css'
import HeaderROU from './HeaderROU'
import { Link } from 'react-router-dom'

const CourseROU = () => {
    const [numBatches, setNumBatches] = useState(0);
  
    const handleNumBatchesChange = (event) => {
      setNumBatches(event.target.value);
    };
  
    const renderBatchDetails = () => {
      const details = [];
      for (let i = 1; i <= numBatches; i++) {
        details.push(
          <div className="row g-3 mt-1" key={i}>
            <div className="col-md-2 p-3">
              <h6>Batch - {i}</h6>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select className="form-select" id={`batch-size-${i}`}>
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
                <label htmlFor={`batch-size-${i}`}>Batch Size</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select className="form-select" id={`delivery-mode-${i}`}>
                  <option selected>Select</option>
                  <option value="1">Online</option>
                  <option value="2">Offline</option>
                  <option value="3">NA</option>
                </select>
                <label htmlFor={`delivery-mode-${i}`}>Delivery Mode</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input type="time" className="form-control"/>
                <label htmlFor={`batch-timing-${i}`}>Batch Timing</label>
              </div>
            </div>
          </div>
        );
      }
      return details;
    };

  return (
    <div>
        <HeaderROU/>
        <div className="course-container container font-link">
          <div className="course-box bg-light">
            <h4>Enter Courses Details</h4>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Robotic Process Automation (RPA)</button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div class="card card-body">
                      <div className="row g-4 mb-3">
                        <div className="col-md-2">
                          <h6>No. of Batches</h6>
                          <select className="form-select" id="num-batches" value={numBatches} onChange={handleNumBatchesChange}>
                           <option value="0" selected>Select</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                           <option value="None">No Batch</option>
                          </select>
                        </div>
                      </div>
                      {numBatches > 0 &&<div>{renderBatchDetails()}</div>}
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Search Engine Optimization (SEO)</button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div class="card card-body">
                      <div className="row g-4 mb-3">
                        <div className="col-md-2">
                          <h6>No. of Batches</h6>
                          <select className="form-select" id="num-batches" value={numBatches} onChange={handleNumBatchesChange}>
                           <option value="0" selected>Select</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                           <option value="None">No Batch</option>
                          </select>
                        </div>
                      </div>
                      {numBatches > 0 &&<div>{renderBatchDetails()}</div>}
                    </div>  
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Python</button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div class="card card-body">
                      <div className="row g-4 mb-3">
                        <div className="col-md-2">
                          <h6>No. of Batches</h6>
                          <select className="form-select" id="num-batches" value={numBatches} onChange={handleNumBatchesChange}>
                           <option value="0" selected>Select</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                           <option value="None">No Batch</option>
                          </select>
                        </div>
                      </div>
                      {numBatches > 0 &&<div>{renderBatchDetails()}</div>}
                    </div>  
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  REACT</button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div class="card card-body">
                      <div className="row g-4 mb-3">
                        <div className="col-md-2">
                          <h6>No. of Batches</h6>
                          <select className="form-select" id="num-batches" value={numBatches} onChange={handleNumBatchesChange}>
                           <option value="0" selected>Select</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                           <option value="None">No Batch</option>
                          </select>
                        </div>
                      </div>
                      {numBatches > 0 &&<div>{renderBatchDetails()}</div>}
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            <Link to={'/retail_ou/courses'}><button type = "button" className="btn btn-primary ">Back</button></Link>
            <Link to={'/retail_ou/submit'}><button type = "button" className="btn btn-primary ">Next</button></Link>
          </div>
        </div>
    </div>
  )
}

export default CourseROU