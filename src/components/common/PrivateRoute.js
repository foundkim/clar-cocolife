import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ element: Component, auth, ...rest }) => {
  if (auth.isLoading) {
    return <h2>Loading...</h2>;
  } else if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
