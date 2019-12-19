import React, { useState } from 'react';
import { humanReadable } from '../../../utils/utils';
import Likes from '../like/likes/Likes';

function ShowLikes({ id, numberOfLikes, decrementLikes }) {
  const [showLikes, setShowLikes] = useState(false);

  function _toggle() {
    setShowLikes(!showLikes);
  }

  return (
    <>
      <span className="p_likes likes" onClick={_toggle} style={{ lineHeight: 0 }}>
        {humanReadable(numberOfLikes, 'like')}
      </span>
      {showLikes && (
        <Likes
          postId={id}
          back={_toggle}
          decrementLikes={decrementLikes}
        />
      )}
    </>
  );
}

export default ShowLikes;
