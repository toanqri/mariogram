import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/auth';

function PrivateRoute({ component: Component, ...rest }) {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
}

export default PrivateRoute;
