import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../../actions/userAction'
import Footer from '../Footer/Footer'
import { Header } from '../Header/Header'

export const Thankyou = () => {
  let { isAuthenticated, loading } = useSelector((state) => state.user);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(logout())
  })

  return (
    
   <>
<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:'100vh'}}>
   <Header/>
<div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>Thank You for visiting our website</p>
      <p>you should receive a confirmation email soon</p>
      <Link to ="/">
      <button className="go-home">
      go home
      </button>
      </Link>
    </div>
</div>
</div>
<Footer/>
  </div>   
   </>
  )
}
