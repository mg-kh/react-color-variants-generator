import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return true ? children : <Redirect to={{ pathname: '/login' }} />
      }}
    />
  )
}

export default AuthProtectedRoute
