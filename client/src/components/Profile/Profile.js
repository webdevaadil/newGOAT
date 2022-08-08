import axios from "axios";
import "./profile.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, loaduser, updateprofile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import { Loader } from "../layout/Loader";
import { Navigate } from "react-router-dom";
import { Login } from "../Login/Login";

export const Profile = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );

  const [username, setName] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [avatar, setavatar] = useState("");
  const [avatarPreview, setavatarPreview] = useState("/Profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.set("username", username);
    myForm.set("gender", gender);
    myForm.set("dob", dob);
    myForm.set("avatar", avatar);
    
    console.log(myForm);
    dispatch(updateprofile(myForm));
  };
  const handle = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setavatarPreview(reader.result);
        setavatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    if (user) {
      setgender(user.gender);
      setName(user.username);
      setdob(user.dob);
      setavatar(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loaduser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, user, isUpdated]);
  
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  if(isAuthenticated===false){
    <Navigate to={<Login/>}/>
  }

  return (
    <>
    
      {loading ? <Loader/>:
    
      <div className="profile_box_two">
          <div className="row">
        {isAuthenticated === true ? (
          <form encType="multipart/form-data" onSubmit={updateProfileSubmit}>
            <h2 className="pro_heading">Profile Photo</h2>

            <div className="pic_flex_box">
              <div
                style={{
                  display: "contents",
                }}
                id="updateProfileImage"
              >
                <img
                  style={{ width: "301px" }}
                  src={avatar}
                  alt="Avatar Preview" 
                />
                <input
                  type="file" className="profil-img"
                  name="avatar"
                  accept="image/*"
                  onChange={handle}
                />
              </div>
            </div>
            <h2 className="per_text">Personal Details</h2>
            <input
              onChange={(e) => setName(e.target.value)}
              value={username}
              className="name"
              type="text"
              placeholder="Full name"
            />
            <div className="input_flex_box">
              <input
                onChange={(e) => setdob(e.target.value)}
                value={formatDate(dob)}
                className="dob"
                placeholder="Date of Birth"
                type="date"
              />
             <div style={{width:"400px"}} className="form-floating">
                      <select
                        name="gender"
                        onChange={(e)=>setgender(e.target.value)}
                        className="form-select"
                        aria-label="Floating label select example"
                        value={gender}
                        autoComplete="new-password"


                      >
                        <option disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </select>
                      <label htmlFor="floatingSelect">Gender (Optional)</label>
                    </div>
            </div>
            <div className="button_flex_box">
              <input type="reset" value="Discard" className="dis_btn" />
              <input type="submit" value="Update" className="sav_btn" />
            </div>
          </form>
        ) : (
          <Navigate to={"/login"}/>
        )}
        </div>
      </div>}
    </>
  );
};
