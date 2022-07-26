import React, { useEffect, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "./accountsetting.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";

export const AccountSetting = () => {
  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector((state) => state.user);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword({oldPassword,newPassword,confirmPassword}));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, alert, isUpdated]);
  return (
    <div style={{ display: "flex" }}>
      <form
        onSubmit={updatePasswordSubmit}
        className="box_two"
      >
        <h2 className="per_text">Change Password</h2>
        <input
          className="cuttent_pass"
          type="password"
          placeholder="cuttent_pass"
          required
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          className="new_pass"
          type="password"
          placeholder="Enter a new Password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className="re_pass"
          type="password"
          placeholder="Re-enter a new Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" value="Change" className="sav_btn">
          Save
        </button>
      </form>
    </div>
  );
};
