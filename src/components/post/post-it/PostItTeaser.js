import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import PostIt from './PostIt';
import { useAuth } from '../../../context/auth';
import { DEFAULT_AVATAR } from '../../../config/Constants';

function PostItTeaser({ disabled, onCompleted }) {
  const [postIt, setPostIt] = useState(false);
  const { currentUser } = useAuth();

  function _togglePostIt(e) {
    setPostIt(!postIt);
  }

  return (
    <div>
      <div
        className="post_it inst"
        style={{ marginBottom: 0 }}
      >
        <Image src={currentUser.avatarUrl || DEFAULT_AVATAR} />
        <div className="post_teaser">
          <span
            className="p_whats_new"
            onClick={disabled ? null : _togglePostIt}
          >
            {`What's new with you, @${currentUser.username}? #cool`}
          </span>
        </div>
      </div>

      {postIt && <PostIt back={_togglePostIt} onCompleted={onCompleted} />}
    </div>
  );
}

export default PostItTeaser;
