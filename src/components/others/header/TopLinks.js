import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Flag, Menu } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_AVATAR } from '../../../config/Constants';
import api from '../../../api/helpers';

function HeaderTopLinks({ isLoggedIn, currentUser }) {
  const { t, i18n } = useTranslation();

  return isLoggedIn ? (
    <>
      <Button
        basic
        onClick={() => {
          i18n.changeLanguage('vi');
          api.init({ acceptLanguage: 'vi' });
        }}
      >
        <Flag name="vn" />
      </Button>
      <Button
        basic
        onClick={() => {
          i18n.changeLanguage('en');
          api.init({ acceptLanguage: 'en' });
        }}
      >
        <Flag name="us" />
      </Button>
      {/* <NavLink */}
      {/*  to="/admin/advertisements" */}
      {/*  activeClassName="ha_active" */}
      {/*  className="notification" */}
      {/* > */}
      {/*  <span className="links_span">Ads</span> */}
      {/* </NavLink> */}
      <NavLink
        to={`/profile/${currentUser.username}`}
        activeClassName="ha_active"
        className="sp"
      >
        <img src={currentUser.avatarUrl || DEFAULT_AVATAR} alt="avatar" className="sp_img" />
        <span className="sp_span">{currentUser.username}</span>
      </NavLink>
    </>
  ) : (
    <>
      <Menu secondary>
        <Menu.Item>
          <Button
            basic
            onClick={() => {
              i18n.changeLanguage('vi');
              api.init({ acceptLanguage: 'vi' });
            }}
          >
            <Flag name="vn" />
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            basic
            onClick={() => {
              i18n.changeLanguage('en');
              api.init({ acceptLanguage: 'en' });
            }}
          >
            <Flag name="us" />
          </Button>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">
            <span className="links_span">Login</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/register">
            <span className="links_span">Register</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default HeaderTopLinks;
