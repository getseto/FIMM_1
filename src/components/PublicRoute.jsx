import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getUser } from '../firebase';


function PublicRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
            !getUser() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/table",
              }}
            />
          )
        }
      />
    );
  }

export default PublicRoute;
