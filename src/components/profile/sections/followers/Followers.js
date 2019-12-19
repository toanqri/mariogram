import React, { useEffect, useState } from 'react';
import { FadeIn } from 'animate-components';
import classNames from 'classnames';
import Title from '../../../others/Title';
import FollowersList from './FollowersList';
import { bottomScroll, cLoading } from '../../../../utils/utils';
import MonHeader from '../../../others/m-on/MonHeader';
import FollowSectionEnd from '../../../others/follow/FollowSectionEnd';
import Loading from '../../../others/IsLoading';
import api from '../../../../api/helpers';
import { showError } from '../../../../utils/helpers';
import { DEFAULT_PAGE, DEFAULT_SIZE } from '../../../../config/Constants';

function Followers({ username }) {
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(1);

  function _getFollowers() {
    setLoading(true);
    api.get(`/users/${username}/followers?page=${page}&size=${DEFAULT_SIZE}`)
      .then((response) => {
        if (page === 0) {
          setFollowers(response.content);
        } else {
          setFollowers([...followers, ...response.content]);
        }
        setTotalPages(response.totalPages);
      })
      .catch((error) => {
        showError(error.message);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getFollowers();
  }, [page]);

  function _loadMore() {
    setPage(page + 1);
  }

  return (
    <div>
      <Title value={`@${username}'s followers`} />

      <FadeIn duration="300ms">
        <Loading loading={loading} />

        <div
          className={classNames(
            'senapati',
            'pro_senapati',
            cLoading(loading),
          )}
        >
          <div
            className={classNames({
              m_div: followers.length !== 0,
              m_no_div: followers.length === 0,
            })}
          >
            <MonHeader len={followers.length} forWhat="follower" />

            <div className="m_wrapper">
              {followers.length && followers.map((f) => (
                <FollowersList key={f.follow_id} follower={f} />
              ))}
            </div>
          </div>
        </div>

        <FollowSectionEnd
          len={followers.length}
          loading={loading}
          when="followers"
          loadMore={_loadMore}
          username={username}
          isLastPage={totalPages === page + 1}
        />
      </FadeIn>
    </div>
  );
}

export default Followers;
