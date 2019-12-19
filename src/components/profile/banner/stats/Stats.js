import React from 'react';
import BannerStat from './Stat';

function BannerStats({ user }) {
  return (
    <div className="pro_bottom">
      <BannerStat username={user.username} statType="posts" statValue={user.numberOfPosts} />
      <BannerStat username={user.username} statType="followers" statValue={user.numberOfFollowers} />
      <BannerStat username={user.username} statType="followings" statValue={user.numberOfFollowings} />
    </div>
  );
}

export default BannerStats;
