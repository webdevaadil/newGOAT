import React, { useEffect, useState } from "react";
import "./accountsetting.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import { useAlert } from "react-alert";
import { Navigate } from "react-router-dom";
import { Loader } from "../layout/Loader";

export const AccountSetting = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isUpdated, loading ,isAuthenticated} = useSelector((state) => state.user);
  const [data, setdata] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(data);
  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePassword(data));
  };
  useEffect(() => {
    
    if (isUpdated) {
      alert.success("password Updated Successfully");
      setdata({ oldPassword: "", newPassword: "", confirmPassword: "" });
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert, isUpdated]);
  return (
    <>
    {loading? <Loader/>:
    <>
      {isAuthenticated === true ? ( 
    <div className="account_box_two" style={{ display: "flex",marginBottom:"24px"}}>
      <form className="form-floating account_form" onSubmit={updatePasswordSubmit} >
        <h2 className="per_text">Change Password</h2>
        <input
          className="cuttent_pass"
          type="password"
          placeholder="Enter a Current Password"
          required
          name="oldPassword"
          value={data.oldPassword}
          onChange={handle}
           autoComplete="new-password"
        />
        <input
          className="new_pass"
          type="password"
          placeholder="Enter a new Password"
          required
          name="newPassword"
          value={data.newPassword}
          onChange={handle}
        />
        
        <input
          className="re_pass"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter a new Password"
          required
          value={data.confirmPassword}
          onChange={handle}
        />

        <button type="submit" value="Change" className="sav_btn">
          Save
        </button>
      </form>
    </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
    }
    </>
  );
};
