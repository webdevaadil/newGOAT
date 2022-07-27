import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
console.log();

  const [data, setData] = useState([])
// console.log(data);
  const handle = (e) => {
    // setdata({ ...data, [e.target.name]: e.target.value });
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  console.log();

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <ProfileNav/> */}
        {isAuthenticated === true ? (
          <div className="box_two">
            <h2 className="pro_heading">Profile Photo</h2>

            <div className="pic_flex_box">
              <img src={process.env.PUBLIC_URL + "img/1.png"} alt="rec" />
              <div className="image">
                <label htmlFor="file">Upload Photo</label>
                <input
                  style={{ backgroundColor: "white" }}
                  type="file"
                  className="big_btn"
                  onChange={handle}
                />
              </div>
            </div>
            <h2 className="per_text">Personal Details</h2>
            <input
              onChange={handle}
              value={user.username}
              className="name"
              name="name"
              type="text"
              placeholder="Full name"
            />
            <div className="input_flex_box">
              <input
                onChange={handle}
                name="dob"
                value={formatDate(user.dob)}
                className="dob"
                placeholder="Date of Birth"
                type="date"
              />
            
               <select onChange={handle}
                value={user.gender}
                className="gender"
                name="gender"
                type="text"
                placeholder="Gender(Optinal)">
                        <option value="male">Male</option>
                        <option value="femae">Female</option>
                    </select>
            </div>
            <div className="button_flex_box">
              <button className="dis_btn">Discard</button>
              <button className="sav_btn">Save</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      
    </>
  );
};
