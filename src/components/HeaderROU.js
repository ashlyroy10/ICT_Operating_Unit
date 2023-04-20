import React from 'react'
import ictlogo from '../assets/images/hlogo.svg';
import '../assets/css/style.css'
import { Link } from 'react-router-dom';

const HeaderROU = () => {
  return (
    <div className='container-fluid sticky-top header-admin pt-4 font-link'>
        <div className='justify-content-between'>
            <div className='row w-100'>
                <div className='col-2'>
                    <Link to ={'/'}><img src={ictlogo} alt='ict logo and title' className='ictlogo' /></Link>
                </div>
                <div className='col-8'>
                    <h3>Training Requirements - Retail Operating Units (ROU)</h3>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default HeaderROU