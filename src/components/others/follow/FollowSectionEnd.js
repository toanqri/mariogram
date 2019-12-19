import React from 'react';
import Nothing from '../Nothing';
import End from '../End';
import { useAuth } from '../../../context/auth';

function FollowSectionEnd({
  loading, len, when, username, loadMore, isLastPage,
}) {
  const { currentUser } = useAuth();
  return (
    <>
      {!loading && len === 0 ? (
        <Nothing
          mssg={
            currentUser.username === username ? `You have no ${when}!!` : `${username} have no ${when}!!`
          }
        />
      ) : !loading && len !== 0 ? (
        <End loading={loading} loadMore={loadMore} isLastPage={isLastPage} />
      ) : null}
    </>
  );
}

export default FollowSectionEnd;
