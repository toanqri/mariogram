import React, { Component, useState } from 'react';
import { post } from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Me } from '../../../../utils/utils';
import MonTopinfo from '../../../others/m-on/MonTopinfo';
import MonSticky from '../../../others/m-on/MonSticky';
import Follow from '../../../others/follow/Follow';
import Unfollow from '../../../others/follow/Unfollow';
import AppLink from '../../../others/link/Link';

function FollowingsList({ following }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showTime, setShowTime] = useState(false);

  // componentDidMount = async () => {
  //   const { follow_to, username } = this.props;
  //   if (!Me(follow_to)) {
  //     const { data: isFollowing } = await post('/api/is-following', { username });
  //     await this.setState({ isFollowing });
  //   }
  // }

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
      <MonTopinfo info={following} />
    </div>
  );
}

export default FollowingsList;
