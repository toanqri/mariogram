import React, { useEffect, useState } from 'react';
import { FadeIn } from 'animate-components';
import classNames from 'classnames';
import FollowingsList from './FollowingsList';
import Title from '../../../others/Title';
import { bottomScroll, cLoading } from '../../../../utils/utils';
import MonHeader from '../../../others/m-on/MonHeader';
import Loading from '../../../others/IsLoading';
import FollowSectionEnd from '../../../others/follow/FollowSectionEnd';
import api from '../../../../api/helpers';
import { showError } from '../../../../utils/helpers';
import { DEFAULT_PAGE } from '../../../../config/Constants';

function Followings({ username }) {
  const [loading, setLoading] = useState(false);
  const [followings, setFollowings] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(1);

  function _getFollowings() {
    setLoading(true);
    api.get(`/users/${username}/followings`)
      .then((response) => {
        if (page === 0) {
          setFollowings(response.content);
        } else {
          setFollowings([...followings, ...response.content]);
        }
        setTotalPages(response.totalPages);
      })
      .catch((error) => showError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getFollowings();
  }, [page]);

  function _loadMore() {
    setPage(page + 1);
  }

  return (
    <div>
      <Title value={`@${username}'s followings`} />

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
              m_div: followings.length !== 0,
              m_no_div: followings.length === 0,
            })}
          >
            <MonHeader len={followings.length} forWhat="following" />

            <div className="m_wrapper">
              {followings.length && followings.map((f) => (
                <FollowingsList key={f.id} following={f} />
              ))}
            </div>
          </div>
        </div>

        <FollowSectionEnd
          len={followings.length}
          loading={loading}
          when="followings"
          loadMore={_loadMore}
          username={username}
          isLastPage={totalPages === page + 1}
        />
      </FadeIn>
    </div>
  );
}

export default Followings;
