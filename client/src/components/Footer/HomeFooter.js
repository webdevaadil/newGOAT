import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  useEffect(() => {
    let url = window.location.href;
    if (url.indexOf('//www.thegoatstips') < 0 && url.indexOf('thegoatstips') >= 0) {
      url = url.replace('//thegoatstips', '//www.thegoatstips')
      window.location.href = url;
    }
  }, []);
  return (
    <div>
        <div className='footer-sec'>
            <div className='container'>
                <div style={{textAlign:"center"}} className='footer-vct'>
                    <Link to={"/terms-and-conditions"}><h4 style={{color:"#fff",fontSize:"0.9rem",marginBottom:"0.3rem"}}>© The GOATs Sports Tips Pty Ltd. All Rights Reserved 2023.</h4></Link>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default HomeFooter