import React from 'react';
import { Image } from 'semantic-ui-react';
import { humanReadable } from '../../../utils/utils';
import AppLink from '../link/Link';
import { DEFAULT_AVATAR } from '../../../config/Constants';

const MonTopinfo = ({ info, basedOnMutuals = false, mutuals = 0 }) => (
  <div className="m_top">
    <Image src={info.avatarUrl || DEFAULT_AVATAR} />
    <div className="m_top_right">
      <AppLink url={`/profile/${info.username}`} label={info.username} />
      {basedOnMutuals ? (
        <span>
          {mutuals === 0
            ? `${info.firstName} ${info.lastName}`
            : humanReadable(mutuals, 'mutual follower')}
        </span>
      ) : (
        <span>
          {info.firstName}
          {' '}
          {info.lastName}
        </span>
      )}
    </div>
  </div>
);

export default MonTopinfo;
