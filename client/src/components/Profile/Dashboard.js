import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomeFooter from "../Footer/HomeFooter";
import { Header } from "../Header/Header";
import { Loader } from "../layout/Loader";
import { Profile } from "./Profile";

import { ProfileNav } from "./ProfileNav";
export const Dashboard = () => {


  return (
    <>
    {/* {loading&& (<Loader/>)} */}
      <>
      <div style={{zIndex:-10}}>

      <Header />
    </div>
      <div className="main-body">
        <section>
          <div className="container profile-sec" style={{ zIndex: "-5"}}>
            <div className="flexbox profil-main">
              <ProfileNav />
              <Outlet />
            </div>
          </div>
          <div style={{ zIndex:111}}>
          </div>
        </section>
      </div>
      </>
      <HomeFooter/>
    
    </>
  );
};
