import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../../actions/userAction'
import Footer from '../Footer/Footer'
import HomeFooter from '../Footer/HomeFooter'
import { Header } from '../Header/Header'

export const Thankyou = () => {
  let { isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate= useNavigate();
  if(isAuthenticated){
   navigate("/") 
  }
  return (
   <>
<div className='thankyoucontent'style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",height:'100vh'}}>
   <Header/>
   <div className='thankyoubg'>
   </div>
    <div className="content " >
  <div className="">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>Thank You for visiting our website</p>
      <p>EXPERT RACING TIPS BY BRAD DAVIDSON

Thanks for signing up!

You will receive an email shortly explaining what happens next

If you do not receive we come email within 5-10mins please email

tips@benddavidson com.au for assistance

If you have any general questions or any issues receiving the preview via email please email tips braddavidson.com.au.

Note: If you have any issues receiving the emails please check your junk folder or conside ding tips@braddavidson.com.au to your email favourites. This will

solve the issue a lot of the time</p>
      <div style = {{display:"flex",justifyContent:"center"}}>

      <Link to ="/signup">
      <button className="go-home">
      SignUp
      </button>
      </Link>
      <Link to ="/login">
      <button className="go-home ml-4">
      Login
      </button>
      </Link>
      </div>

    </div>
</div>

   </div>
  </div>   
<HomeFooter/>
   </>
  )
}
