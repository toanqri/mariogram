import React from 'react';
import { FadeIn } from 'animate-components';
import Nothing from '../../others/Nothing';

function MapPosts({ posts, nothingMssg }) {
  const len = posts.length;

  return (
    <>
      {len === 0 ? (
        <Nothing mssg={nothingMssg} />
      ) : (
        <FadeIn duration="500ms">{posts}</FadeIn>
      )}
    </>
  );
}

export default MapPosts;
