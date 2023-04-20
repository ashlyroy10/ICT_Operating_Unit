import React from 'react'
import login1 from '../assets/images/login1.jpg'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'

const Adminlogin = () => {
  return (
    
    
    <div class='login-container container font-link'>
        <div class="login-box">
            <div class="container text-center">
                <div class="row">
                    <div class="col loginimg">
                        <img src={login1} className='rounded float-start ' alt='Logo'/>
                    </div>
                    <div class="form-login col mt-5 pt-4">
                        <h2>Login</h2>
                        <div class="form-group">
                            <label for="uname"></label>
                            <input type="text" class="form-control bg-light" id="uname" placeholder="Username" name="uname" />
                        </div>
                        <div class="form-group">
                            <label for="pswd"></label>
                            <input type="password" class="form-control bg-light" id="pswd" placeholder="Password" name="pswd" />
                        </div>
                        <div className="form-check py-3">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value="" />Remember Me
                            </label>	
                        </div>
                        <Link to={'/retail_ou'}><button type = "button" className="btn btn-primary ">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin

