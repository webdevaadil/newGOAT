import axios from "axios";
import "./profile.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { positions, transitions, useAlert } from "react-alert";
import {
  clearErrors,
  loaduser,
  updateprofile,
  updateimage,
} from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import { Loader } from "../layout/Loader";
import { Navigate } from "react-router-dom";
import { Login } from "../Login/Login";

export const Profile = () => {
  const dispatch = useDispatch();

  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  const alert = useAlert();
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );

  const [username, setName] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [residientialaddress, setresidientialaddress] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("username", username);
    myForm.set("gender", gender);
    myForm.set("dob", dob);
    myForm.set("dob", dob);
    myForm.set("phoneno", phoneno);
    myForm.set("residientialaddress", residientialaddress);

    console.log(myForm);
    dispatch(updateprofile(myForm));
  };

  useEffect(() => {
    if (user) {
      setgender(user.gender);
      setName(user.username);
      setdob(user.dob);
      setphoneno(user.phoneno);
      setresidientialaddress(user.residientialaddress);
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
  if (isAuthenticated === false) {
    <Navigate to={<Login />} />;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="profile_box_two ">
            <div className="row">
              {isAuthenticated !== true ? (
                <Navigate to={"/login"} />
              ) : (
                <>
                  <div className="pic_flex_box">{/* </div> */}</div>
                  <h2 className="per_text">Personal Details</h2>
                  <form className="form-group" onSubmit={updateProfileSubmit}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name</label>
                      <input
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={username}
                        className="name form-control"
                        type="text"
                        placeholder="Full name"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <div className="form-group">
                        <label for="exampleInputPassword1">D.O.B</label>
                        <input
                          class="form-control"
                          name="DoB"
                          value={formatDate(dob)}
                          className="name form-control"
                          type="text"
                          placeholder="Full name"
                          id="exampleInputPassword1"
                          readOnly
                          style={{backgroundColor:"#fff"}}
                        />

                        
                      </div>
                      <div className="form-group">
                        
                       

                        <label for="exampleInputPassword2">Gender</label>
                        <input
                          class="form-control"
                          name="DoB"
                          value={gender}
                          className="name form-control"
                          type="text"
                          readOnly
                          style={{backgroundColor:"#fff"}}

                          id="exampleInputPassword2"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword3">Phone No</label>
                      <input
                        onChange={(e) => setphoneno(e.target.value)}
                        value={phoneno}
                        className="name form-control"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword3"
                        placeholder="Password"
                        pattern="[0-9]{10}"
                      />
                      <small id="exampleInputPassword3" class="form-text text-muted">format 1234567890</small>
                      
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">
                        Residiential Address
                      </label>
                      <input
                        onChange={(e) => setresidientialaddress(e.target.value)}
                        class="form-control"
                        value={residientialaddress}
                        className="name form-control"
                        type="text"
                        id="exampleInputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="button_flex_box">
                      <input type="reset" value="Discard" className="dis_btn" />
                      <input type="submit" value="Update" className="sav_btn" />
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
