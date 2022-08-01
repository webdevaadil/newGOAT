import axios from "axios";
import"./profile.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, loaduser, updateprofile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";

export const Profile = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );

  const [username, setName] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [pic, setpic] = useState("");
  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("username", username);
    myForm.set("gender", gender);
    myForm.set("dob", dob);
    myForm.set("pic", pic);

    dispatch(updateprofile(myForm));
  };
  useEffect(() => {
    if (user) {
      setgender(user.gender);
      setName(user.username);
      setdob(user.dob);
      setpic(user.pic);
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

  return (
    <>
      <div  className="profile_box_two"style={{ display: "flex" }}>
        {isAuthenticated === true ? (
          <form
            encType="multipart/form-data"
            onSubmit={updateProfileSubmit}
           
          >
            <h2 className="pro_heading">Profile Photo</h2>

            <div className="pic_flex_box">
              <img style={{width:"300px",height:"301px"}}src={pic} alt="rec" />
              <div className="image">
                <label htmlFor="file">Upload Photo</label>
                <input
                  style={{ backgroundColor: "white" }}
                  type="file"
                  className="big_btn"
                  onChange={(e) =>setpic(e.target.files)}
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
              <input
                onChange={(e) => setgender(e.target.value)}
                value={gender}
                className="gender"
                placeholder="Gender(Optinal)"
              />
            </div>
            <div className="button_flex_box">
              <input type="reset" value="Discard" className="dis_btn"
                
              />
              <input    type="submit"
                  value="Update"className="sav_btn"/>
            </div>
          </form>
        ) : (
          "please login"
        )}
      </div>
    </>
  );
};
