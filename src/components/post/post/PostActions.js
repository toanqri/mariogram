import React, { useState } from 'react';
import PostLike from '../like/PostLike';
import ShowLikes from './ShowLikes';

function PostActions({ postDetails }) {
  const [numberOfLikes, setNumberOfLikes] = useState(postDetails.numberOfLikes || 0);

  const { id, owner, liked } = postDetails;

  const childProps = {
    postDetails: { id, owner, liked },
    incrementWhat: () => setNumberOfLikes(numberOfLikes + 1),
    decrementWhat: () => setNumberOfLikes(numberOfLikes - 1),
  };

  return (
    <div>
      <div className="p_a">
        <div className="p_do">
          <PostLike {...childProps} />
        </div>

        <div className="p_did">
          <ShowLikes
            id={id}
            numberOfLikes={numberOfLikes}
            decrementLikes={() => setNumberOfLikes(numberOfLikes - 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default PostActions;
