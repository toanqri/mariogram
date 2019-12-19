import React, { useState } from 'react';
import { FadeIn } from 'animate-components';
import { Redirect } from 'react-router-dom';
import qs from 'querystring';
import { Button, Form } from 'semantic-ui-react';
import Title from '../others/Title';
import { viewPassword } from '../../utils/utils';
import { useAuth } from '../../context/auth';
import { OAUTH2, TOKEN_KEY } from '../../config/Constants';
import api from '../../api/helpers';
import { showError } from '../../utils/helpers';

function AdminLogin() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('cdoan');
  const [password, setPassword] = useState('string');
  const { setToken } = useAuth();

  function _toggleViewPassword() {
    viewPassword({
      input: '#al_password',
      icon: '.s_p_l',
    });
  }

  function _login() {
    if (username && password) {
      const data = {
        grant_type: 'password',
        username,
        password,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${OAUTH2}`,
        },
        data: qs.stringify(data),
        url: '/oauth/token',
      };
      api.client.request(options)
        .then((response) => {
          localStorage.setItem(TOKEN_KEY, JSON.stringify(response.data.access_token));
          setToken(response.data.access_token);
          setLoggedIn(true);
        })
        .catch((error) => {
          showError(error.message || error);
        });
    }
  }

  return (
    <div>
      {isLoggedIn && <Redirect to="/is-admin" />}

      <Title
        value="Are you the admin?"
        desc="Verify you are admin with the admin password"
      />

      <FadeIn duration="300ms">
        <div className="cua are-you-admin">
          <div className="display_text">
            <span>Are you the admin?</span>
          </div>
          <Form className="form_login">
            <Form.Input
              icon="users"
              iconPosition="left"
              value={username}
              required
              spellCheck="false"
              autoComplete="false"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button fluid positive onClick={_login}>Login</Button>
          </Form>
        </div>
      </FadeIn>
    </div>
  );
}

export default AdminLogin;
