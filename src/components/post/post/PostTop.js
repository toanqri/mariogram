import React from 'react';
import PostTopDetails from './TopDetails';
import PostOptions from './post-top/options/Options';

const PostTop = ({ postDetails, updateText }) => (
  <div>
    <div className="p_i">
      <PostTopDetails details={{ ...postDetails }} />
      <PostOptions
        postDetails={{ ...postDetails }}
        updateText={updateText}
      />
    </div>
  </div>
);

export default PostTop;
