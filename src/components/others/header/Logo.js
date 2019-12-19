import React from 'react';
import AppLink from '../link/Link';

const HeaderLogo = () => (
  <div className="logo">
    <AppLink url="/">
      <img src={require('../../../assets/images/instagram.jpg')} alt="Instagram" />
    </AppLink>
  </div>
);

export default HeaderLogo;
