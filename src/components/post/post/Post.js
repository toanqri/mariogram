import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import PostTop from './PostTop';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostBottom from './PostBottom';

function Post({ post, when }) {
  const [text, setText] = useState('');

  return (
    <div className="posts">
      <PostTop
        postDetails={{
          ...post,
          text,
        }}
        updateText={(value) => setText(value)}
      />

      <Container>
        <h4>
          {post.text}
        </h4>
      </Container>

      <PostImage
        postDetails={{
          ...post,
          text,
        }}
      />

      <hr className="img_d_hr" />
      <PostActions postDetails={{ ...post }} />
      <hr />
      <PostBottom postDetails={{ ...post, when }} />
    </div>
  );
}

export default Post;
