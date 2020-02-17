import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getUser } from '../firebase';


function PrivateRoute({ children, ...rest }) {
  return getUser() ? (
    <Route {...rest}>
      {children}
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  )
}

export default PrivateRoute;