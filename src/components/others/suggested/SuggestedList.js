import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { humanReadable } from '../../../utils/utils';
import AdvancedFollow from '../follow/AdvancedFollow';
import AdvancedUnfollow from '../follow/AdvancedUnfollow';
import AppLink from '../link/Link';
import { DEFAULT_AVATAR } from '../../../config/Constants';

function SuggestedList({
  id, avatarUrl, username, mutualUsersCount = 0, firstName, lastName,
}) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="recomms">
      <Image src={avatarUrl || DEFAULT_AVATAR} ui={false} />
      <div className="recomms_cont">
        <AppLink
          url={`/profile/${username}`}
          className="recomms_username"
          label={username}
        />
        <span>
          {mutualUsersCount === 0
            ? `${firstName} ${lastName}`
            : humanReadable(mutualUsersCount, 'mutual follower')}
        </span>
      </div>
      <div className="recomms_ff">
        {isFollowing ? (
          <AdvancedUnfollow
            user={id}
            unfollowed={() => setIsFollowing(false)}
          />
        ) : (
          <AdvancedFollow
            username={username}
            followed={() => setIsFollowing(true)}
          />
        )}
      </div>
    </div>
  );
}

export default SuggestedList;
