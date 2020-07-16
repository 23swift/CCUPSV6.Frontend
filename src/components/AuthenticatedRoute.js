import React from 'react'
import { Route, useLocation, Redirect } from "react-router-dom";

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }

const AuthenticatedRoute = ({ children, ...rest }) => {
    const { pathname, search } = useLocation();

    return (
        <Route {...rest}>
      {fakeAuth.isAuthenticated  ? (
        children
      ) : (
        // <Redirect to={
        //   `/login?redirect=${pathname}${search}`
        // } />
        <Redirect to="/login" />
      )}
    </Route>
    )
}

export default AuthenticatedRoute
