import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Profile } from "./Profile";

import { ProfileNav } from "./ProfileNav";

export const Dashboard = () => {
  return (
    <>
    <Header/>
      <section>
        <div style={{width:"80%",margin:"0 auto"}}class="container">
          <div class="flexbox">
              <ProfileNav />
              <Outlet />
            </div>
          </div>
      </section>
    </>
  );
};
