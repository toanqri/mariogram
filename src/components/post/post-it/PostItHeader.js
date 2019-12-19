import React from 'react';
import { Image } from 'semantic-ui-react';
import { useAuth } from '../../../context/auth';
import { DEFAULT_AVATAR } from '../../../config/Constants';

function PostItHeader({ fileChanged }) {
  const { currentUser } = useAuth();

  return (
    <div className="i_p_top p_top">
      <div className="i_p_info p_info">
        <Image src={currentUser.avatarUrl || DEFAULT_AVATAR} />
        <span>{currentUser.username}</span>
      </div>
    </div>
  );
}

export default PostItHeader;
