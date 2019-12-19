import React from 'react';
import ToolTip from 'react-tooltip';
import BannerStats from './stats/Stats';
import BannerAvatar from './Avatar';
import BannerInfo from './Info';
import BannerFollow from './Follow';

function Banner({
  user, isMe, updateFollowers, updateFollowings,
}) {
  return (
    <div className="pro_banner">
      <div className="pro_top">
        <BannerFollow
          user={user}
          isMe={isMe}
          updateFollowers={updateFollowers}
          updateFollowings={updateFollowings}
        />
      </div>
      <BannerAvatar {...user} isMe={isMe} />
      <BannerInfo {...user} />
      <hr />
      <BannerStats user={user} />
      <ToolTip />
    </div>
  );
}

export default Banner;
