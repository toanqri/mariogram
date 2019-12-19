import React from 'react';
import { number, shape, string } from 'prop-types';
import moment from 'moment';
import { Me } from '../../../../../utils/utils';
import AppLink from '../../../../others/link/Link';

const LikeInfo = ({ likeDetails }) => {
  const { like_by, username, like_time } = likeDetails;

  return (
    <div className="modal_it_info">
      <AppLink
        url={`/profile/${username}`}
        className="modal_it_username"
        label={Me(like_by) ? 'You' : username}
      />
      <span className="modal_it_light">{moment(like_time).fromNow()}</span>
    </div>
  );
};

LikeInfo.propTypes = {
  likeDetails: shape({
    like_by: number.isRequired,
    username: string.isRequired,
    like_time: string.isRequired,
  }),
};

export default LikeInfo;
