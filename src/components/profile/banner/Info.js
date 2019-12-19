import React from 'react';
import AppLink from '../../others/link/Link';

function BannerInfo({ username, firstName, lastName }) {
  const url = window.location.pathname;

  return (
    <div className="pro_info">
      <div className="pro_username">
        <AppLink url={url} className="username" label={username} />
      </div>
      <div className="pro_name">
        <span>
          {`${firstName || ''} ${lastName || ''}`}
        </span>
      </div>
    </div>
  );
}

export default BannerInfo;
