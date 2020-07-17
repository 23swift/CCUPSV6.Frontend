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

const AuthenticatedRoute = ({ component:Component, ...rest }) => {
    

    return (
        <Route {...rest}
          render={props=>
            localStorage.getItem("auth_token")?
            (<Component {...props}/>):
            (
              <Redirect
                to={{
                  pathname:"/login",
                  state:{from:props.location}
                }}
              />
            )

          }
        />
    
    )
}

export default AuthenticatedRoute
