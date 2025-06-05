import React from "react";
import { Navigate, Redirect, Route } from "react-router-dom";

const isAuthenticate = () => localStorage.getItem('Yt');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Navigate to={{
          pathname: "/login",
          state: { from: props.location }
        }} />
      )
    }
  />
);

export default PrivateRoute;