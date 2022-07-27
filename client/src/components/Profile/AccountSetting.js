import React, { useEffect, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "./accountsetting.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import { useAlert } from "react-alert";

export const AccountSetting = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isUpdated, loading } = useSelector((state) => state.user);
  const [data, setdata] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
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
      alert.error("error");
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert, isUpdated]);
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={updatePasswordSubmit} className="box_two">
        <h2 className="per_text">Change Password</h2>
        <input
          className="cuttent_pass"
          type="password"
          placeholder="cuttent_pass"
          required
          name="oldPassword"
          value={data.oldPassword}
          onChange={handle}
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
  );
};
