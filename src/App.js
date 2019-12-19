import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { NotificationContainer } from 'react-notifications';
import Header from './components/others/header/Header';
import Routes from './routes';
import { TOKEN_KEY } from './config/Constants';
import api from './api/helpers';
import { AuthContext } from './context/auth';
import { showError } from './utils/helpers';

function App() {
  const savedToken = JSON.parse(localStorage.getItem(TOKEN_KEY));

  const [token, setToken] = useState(savedToken);
  const [currentUser, setCurrentUser] = useState({});
  const [q, setQ] = useState('');

  function _fetchProfile() {
    if (!token) return;
    const username = token ? jwtDecode(token).name : '';
    if (username) {
      api.get(`/users/${username}`)
        .then((response) => {
          setCurrentUser(response);
        })
        .catch((error) => showError(error.message));
    }
  }

  const saveToken = (data) => {
    setToken(null);
    setCurrentUser({});
    if (data) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
      setToken(data);
      api.init({ token: savedToken });
      _fetchProfile();
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  };

  if (savedToken) {
    api.init({ token: savedToken });
  }

  useEffect(() => {
    _fetchProfile();
  }, [token]);

  return (
    <Suspense fallback>
      <AuthContext.Provider value={{ token, setToken: saveToken, currentUser, q }}>
        <Router>
          <div className="app">
            <NotificationContainer />
            <Header q={q} onChangedQ={setQ} isLoggedIn={token} currentUser={currentUser} />
            <Routes />
          </div>
        </Router>
      </AuthContext.Provider>
    </Suspense>
  );
}

export default App;
