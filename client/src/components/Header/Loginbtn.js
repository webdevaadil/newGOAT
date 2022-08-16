import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { loaduser } from "../../actions/userAction";
import { Loader } from "../layout/Loader";

export const Loginbtn = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading} = useSelector((state) =>state.user);
  useEffect(()=>{

    store.dispatch(loaduser())

  },[])
  const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
  return (
    <>

        <span className="home_btn">
        {isAuthenticated ===true? (<div>
            <button onClick={()=>navigate("/dashboard")} className="user_btn">{uppercaseWords(user.username)}</button>
          </div>): (
           <ul className="navbar-nav top-btn ml-auto">
           <Link to = "/login"><button className='btn btn-1'>Login</button>  </Link>
            <Link to = "/signup"><button className='btn btn-2'>Signup</button>  </Link>
         </ul>
          )
        }
      </span>

    </>
  );
};