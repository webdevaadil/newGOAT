import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login } from "../Login/Login";
export const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    <Navigate to={"/login"} />;
  }

  return isAuthenticated && <Navigate to="/login" />;
};
