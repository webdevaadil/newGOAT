import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "../layout/Loader";
import { Profile } from "./Profile";

import { ProfileNav } from "./ProfileNav";
export const Dashboard = () => {
  const navigation = useNavigate();
  let { isAuthenticated, loading } = useSelector((state) => state.user);
  useEffect(() => {}, [loading, navigation]);

  return (
    <>  
      <Header />
      <div className="main-body">
      <section>
        <div class="container profile-sec">
          <div class="flexbox">
            <ProfileNav />
            <Outlet />
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
