import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderCOU from './HeaderCOU';

const CourseCOU = () => {
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
                <input type="text" class="form-control" id={`batch-size-${i}`}></input>
                <label htmlFor={`batch-size-${i}`}>Participant Count</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select className="form-select" id={`delivery-mode-${i}`}>
                  <option selected>Select</option>
                  <option value="1">Online/Virtual</option>
                  <option value="2">Offline/Physical</option>
                  <option value="3">Hybrid</option>
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
        <HeaderCOU/>
        <div className="course-container container font-link">
            <div className="course-box bg-light">
                <div className='row'>
                    <div className='col-9'>
                        <h6>Expected training expertise</h6>
                        <select className="form-select">
                            <option value="0" selected>Select</option>
                            <option value="1">Data Science & Analytics(DSA)</option>
                            <option value="2">Full Stack Development - MEAN</option>
                            <option value="3">Full Stack Development - MERN</option>
                            <option value="4">Full Stack Development - .NET</option>
                            <option value="5">Full Stack Development - JAVA</option>
                            <option value="6">Cyber Security Analyst(CSA)</option>
                            <option value="7">Machine Learning & Artificial Intelligence(MLAI)</option>
                            <option value="8">Software Testing(ST)</option>
                            <option value="9">Digital Msrketing(DM)</option>
                            <option value="10">Augmented Reality/Virtual Reality(ARVR)</option>
                            <option value="11">Robotic Process Automation(RPA)</option>
                            <option value="12">Search Engine Optimization(SEO)</option>
                            <option value="13">Python</option>
                            <option value="14">R Programming</option>
                            <option value="15">DevOps</option>
                            <option value="16">PowerBI</option>
                            <option value="17">Tableau</option>
                            <option value="18">Cloud Platforms(AWS/Azure)</option>
                            <option value="19">Android/IOS</option>
                            <option value="20">G-Suite/MS Office</option>
                        </select>                        
                    </div>
                    <div className='col-2'>
                        <h6>No. of Batches</h6>
                        <select className="form-select" id="num-batches" value={numBatches} onChange={handleNumBatchesChange}>
                            <option value="0" selected>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="None">No Batch</option>
                        </select>
                    </div>
                    {numBatches > 0 &&<div>{renderBatchDetails()}</div>}
                </div>
                <Link to={'/corporate_ou'}><button type = "button" className="btn btn-primary ">Back</button></Link>
                <Link to={'/corporate_ou/submit'}><button type = "button" className="btn btn-primary ">Next</button></Link>
            </div>
        </div> 
    </div>
  )
}

export default CourseCOU