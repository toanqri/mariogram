import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import qs from 'querystring';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/auth';
import { OAUTH2, TOKEN_KEY } from '../../config/Constants';
import api from '../../api/helpers';
import { showError } from '../../utils/helpers';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

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
      setLoading(true);
      api.client.request(options)
        .then((response) => {
          localStorage.setItem(TOKEN_KEY, JSON.stringify(response.data.access_token));
          setToken(response.data.access_token);
          setLoggedIn(true);
        })
        .catch((error) => {
          showError(error.message || error);
        })
        .finally(() => setLoading(false));
    }
  }

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="notes_wrapper" style={{ paddingTop: 500 }}>
      <div className="register cua">
        <div className="display_text">
          <span>{t('login.title')}</span>
        </div>
        <Form className="form_login" onSubmit={_login}>
          <Form.Input
            icon="users"
            iconPosition="left"
            value={username}
            required
            spellCheck="false"
            autoComplete="false"
            placeholder={t('login.username')}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            type="password"
            value={password}
            required
            placeholder={t('login.password')}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            fluid
            positive
            loading={loading}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
