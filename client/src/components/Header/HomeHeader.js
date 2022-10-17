import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

const HomeHeader = () => {
  
  return (
    <div>
        <div className='theader header sticky' id="myHeader">
        <div className='container'>
           <div className='row head-sec'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='logo'>
                <img src="./logo.png"/>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='sign-btn'>
                    <Link to = "/signup">
                <button className='signbtn'>Signup</button>
                    </Link>
                </div>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default HomeHeader