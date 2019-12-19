import React from 'react';
import classNames from 'classnames';

function ProfileNav({ isMe }) {
  return (
    <div className={classNames('pro_nav', 'user_nav', { not_me_nav: !isMe })} />
  );
}

export default ProfileNav;
