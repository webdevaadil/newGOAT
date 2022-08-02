import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
export const ProtectedRoute = ({  component: element, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    return (
    <Fragment>
    {loading === false && (
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated === false) {
            return <Navigate to="/login" />;
          }

         

          return <element {...props} />;
        }}
      />
    )}
  </Fragment>
  )
}
