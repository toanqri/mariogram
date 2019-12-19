import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Me } from '../../../../../utils/utils';
import { isAdmin } from '../../../../../utils/admin-utils';
import LikeInfo from './Info';
import RemoveLikeAsAdmin from './RemLike';
import AdvancedUnfollow from '../../../../others/follow/AdvancedUnfollow';
import AdvancedFollow from '../../../../others/follow/AdvancedFollow';
import AppLink from '../../../../others/link/Link';

class LikeList extends Component {
  state = {
    isFollowing: false,
  }

  componentDidMount = () => this.setState({ isFollowing: this.props.isFollowing })

  componentWillReceiveProps = ({ isFollowing }) => this.setState({ isFollowing })

  render() {
    const {
      like_id,
      like_by,
      username,
      firstname,
      surname,
      like_time,
      decrementLikes,
    } = this.props;
    const { isFollowing } = this.state;

    return (
      <div className="modal_items fer_items">
        <div className="modal_it_img">
          <img src={`/users/${like_by}/avatar.jpg`} />
        </div>

        <div className="modal_it_content">
          <LikeInfo likeDetails={{ like_by, username, like_time }} />

          <div className="modal_ff">
            {Me(like_by) ? (
              <AppLink
                url={`/profile/${username}`}
                className="pri_btn follow"
                label="Profile"
              />
            ) : isAdmin() ? (
              <RemoveLikeAsAdmin
                like_id={like_id}
                decrementLikes={decrementLikes}
              />
            ) : isFollowing ? (
              <AdvancedUnfollow
                user={like_by}
                unfollowed={() => this.setState({ isFollowing: false })}
              />
            ) : (
              <AdvancedFollow
                userDetails={{
                  user: like_by,
                  username,
                  firstname,
                  surname,
                }}
                followed={() => this.setState({ isFollowing: true })}
              />
            )}
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

LikeList.propTypes = {
  like_id: PropTypes.number.isRequired,
  like_time: PropTypes.string.isRequired,
  like_by: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  post_id: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  decrementLikes: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  ud: store.User.user_details,
});

export default connect(mapStateToProps)(LikeList);
export { LikeList as PureLikeList };
