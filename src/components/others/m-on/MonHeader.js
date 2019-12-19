import React from 'react';
import { humanReadable } from '../../../utils/utils';

function MonHeader({ len, forWhat }) {
  return (
    <>
      {len !== 0 ? (
        <div className="m_header">
          <span>
            {forWhat === 'puk'
              ? `${humanReadable(len, 'follower')} you might know`
              : humanReadable(len, forWhat)}
          </span>
        </div>
      ) : null}
    </>
  );
}

export default MonHeader;
