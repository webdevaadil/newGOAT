import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { loaduser } from "../../actions/userAction";

export const Loginbtn = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading} = useSelector((state) => state.user);
  useEffect(()=>{

    if(isAuthenticated){
      
    }
    store.dispatch(loaduser())

  },[])
  return (
    <>
      <span className="home_btn">
        {isAuthenticated !==true? (
           <ul className="navbar-nav top-btn ml-auto">
           <Link to = "/login"><button className='btn btn-1'>Login</button>  </Link>
            <Link to = "/signup"><button className='btn btn-2'>Signup</button>  </Link>
         </ul>
        ) : (
          <div>
            <button onClick={()=>navigate("/dashboard")} className="user_btn">{user.username}</button>
          </div>
        )}
      </span>
        {/* <button onClick={()=>navigate("/dashboard")} className="user_btn"></button> */}
    </>
  );
};