import React from 'react';
import End from '../others/End';
import Post from '../post/post/Post';
import MapPosts from '../post/map-posts/MapPosts';

function Feed({
  posts, isLastPage, loadMore, loading,
}) {
  const len = posts.length;
  const mapFeed = posts.map((p) => <Post key={p.id} post={p} when="feed" />);

  const nothingMssg = "Looks like you're new, Follow some to fill up your feed or post from above options!!";

  return (
    <>
      <div className="posts_div" style={{ marginTop: len === 0 ? 10 : 0 }}>
        <MapPosts posts={mapFeed} nothingMssg={nothingMssg} />
      </div>
      {len !== 0 && <End isLastPage={isLastPage} loadMore={loadMore} loading={loading} />}
    </>
  );
}

export default Feed;
