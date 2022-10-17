import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <div>
        <div className='footer-sec'>
            <div className='container'>
                <div style={{textAlign:"center"}} className='footer-vct'>
                    <Link to={"/privacy-policy"}><h4 style={{color:"#fff",fontSize:"0.9rem",marginBottom:"0.3rem"}}>© The GOATs Sports Tips Pty Ltd. All Rights Reserved 2022.</h4></Link>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default HomeFooter