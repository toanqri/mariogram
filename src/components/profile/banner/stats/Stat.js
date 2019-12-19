import React from 'react';
import { c_first } from '../../../../utils/utils';
import AppLink from '../../../others/link/Link';

const BannerStat = ({
  username, disabled, statType, statValue,
}) => {
  const body = (
    <>
      <span className="pro_hg">{statValue}</span>
      <span className="pro_nhg">{c_first(statType)}</span>
    </>
  );
  const url = statType === 'posts' ? `/profile/${username}` : `/profile/${username}/${statType}`;

  return (
    <>
      {disabled ? (
        <div className="pro_post stat_disabled">{body}</div>
      ) : (
        <AppLink url={url}>{body}</AppLink>
      )}
    </>
  );
};

export default BannerStat;
