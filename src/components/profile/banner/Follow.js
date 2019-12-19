import React, { useEffect, useState } from 'react';
import Follow from '../../others/follow/Follow';
import Unfollow from '../../others/follow/Unfollow';
import AppLink from '../../others/link/Link';

function BannerFollow({
  user, isMe, updateFollowers, updateFollowings,
}) {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    setFollowing(user.following);
  }, [user]);

  return (
    <div className="pro_ff">
      {isMe ? (
        <AppLink
          url="/edit-profile"
          label="Edit profile"
          className="pri_btn ff"
        />
      ) : following ? (
        <Unfollow
          username={user.username}
          unfollowed={() => {
            setFollowing(false);
            updateFollowers(-1);
          }}
          updateFollowers
        />
      ) : (
        <Follow
          username={user.username}
          followed={() => {
            setFollowing(true);
            updateFollowers(1);
          }}
        />
      )}
    </div>
  );
}

export default BannerFollow;
