import React, { useState } from 'react';
import moment from 'moment';
import { Me } from '../../../../utils/utils';
import MonTopinfo from '../../../others/m-on/MonTopinfo';
import MonSticky from '../../../others/m-on/MonSticky';
import Follow from '../../../others/follow/Follow';
import Unfollow from '../../../others/follow/Unfollow';
import AppLink from '../../../others/link/Link';

function FollowersList({ follower, username, isMe }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showTime, setShowTime] = useState(false);

  // componentDidMount = async () => {
  //   const { follow_by, username } = this.props;
  //   if (!Me(follow_by)) {
  //     const { data } = await post('/api/is-following', { username });
  //     await this.setState({ isFollowing: data });
  //   }
  // };

  function _showTime() {
    setShowTime(true);
  }

  function _hideTime() {
    setShowTime(false);
  }

  return (
    <div
      className="m_on followers_m_on"
      onMouseOver={_showTime}
      onMouseOut={_hideTime}
    >
      <MonTopinfo info={follower} />

      {/*<MonSticky show={showTime} text={moment(follow_time).fromNow()} />*/}

      {/*<div className="m_bottom">*/}
      {/*  {Me(follow_by) ? (*/}
      {/*    <AppLink*/}
      {/*      url={`/profile/${username}`}*/}
      {/*      className="sec_btn"*/}
      {/*      label="Profile"*/}
      {/*    />*/}
      {/*  ) : isFollowing ? (*/}
      {/*    <Unfollow*/}
      {/*      user={follow_by}*/}
      {/*      unfollowed={() => this.setState({ isFollowing: false })}*/}
      {/*      updateFollowings={Me(id)}*/}
      {/*    />*/}
      {/*  ) : (*/}
      {/*    <Follow*/}
      {/*      userDetails={{*/}
      {/*        user: follow_by,*/}
      {/*        username,*/}
      {/*        firstname,*/}
      {/*        surname,*/}
      {/*      }}*/}
      {/*      followed={() => this.setState({ isFollowing: true })}*/}
      {/*      updateFollowings={Me(id)}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
}

export default FollowersList;
