import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../api/helpers';
import { showSuccess } from '../../utils/helpers';

function Register() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const { t } = useTranslation();

  function _register() {
    if (password !== confirmPassword) {
      setErrors(['Confirm Password does not match']);
      return;
    }
    const data = {
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
    };
    setLoading(true);
    api.post('/register', data, false)
      .then((response) => {
        showSuccess(response.message);
        setSuccess(true);
      })
      .catch((err) => {
        if (err.message === 'Validation error') {
          setErrors(err.errors);
          console.log(errors);
        } else {
          setErrors([err.message]);
        }
      })
      .finally(() => setLoading(false));
  }

  return success ? <Redirect to="/login" /> : (
    <div className="notes_wrapper" style={{ paddingTop: 500 }}>
      <div className="register cua " style={{ width: 450 }}>
        <div className="display_text">
          <span>{t('register.title')}</span>
        </div>
        <Form className="form_register" error>
          <Form.Input
            icon="users"
            iconPosition="left"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t('register.username')}
            required
            disabled={loading}
          />
          <div className="username_checker">
            <span className="checker_text">username not available</span>
            <span className="checker_icon">
              <i className="far fa-frown" />
            </span>
          </div>
          <Form.Group widths="equal">
            <Form.Input
              icon="user"
              iconPosition="left"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t('register.firstName')}
              required
              disabled={loading}
            />
            <Form.Input
              icon="user"
              iconPosition="left"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={t('register.lastName')}
              required
              disabled={loading}
            />
          </Form.Group>
          <Form.Input
            icon="mail"
            iconPosition="left"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('register.email')}
            required
            disabled={loading}
          />
          <Form.Input
            icon="phone"
            iconPosition="left"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t('register.phone')}
            disabled={loading}
          />
          <Form.Group widths="equal">
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('register.password')}
              required
              disabled={loading}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('register.confirmPassword')}
              required
              disabled={loading}
            />
          </Form.Group>
          {errors && errors.length ? (
            <Message
              error
              list={errors}
            />
          ) : null}
          <Button fluid positive loading={loading} onClick={_register}>{t('login.register')}</Button>
        </Form>
      </div>

    </div>
  );
}

export default Register;
