import React from 'react';
import Post from '../post/Post';
import End from '../../others/End';
import Nothing from '../../others/Nothing';

function ShowPost({ post }) {
  return (
    <>
      {post.id ? (
        <>
          <Post key={post.id} post={post} when="viewPost" />
          <End />
        </>
      ) : (
        <Nothing mssg="No such post found!!" />
      )}
    </>
  );
}


export default ShowPost;
