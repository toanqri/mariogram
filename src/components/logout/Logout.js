import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TOKEN_KEY } from '../../config/Constants';
import { useAuth } from '../../context/auth';

function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const { setToken } = useAuth();

  setToken(null);

  return isLoggedOut ? <Redirect to="/login" /> : <Redirect to="/" />;
}

export default Logout;
