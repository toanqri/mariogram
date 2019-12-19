import React from 'react';
import End from './End';

function SectionsEnd({ len, loading, loadMore, isLastPage }) {
  return (
    <div style={{ width: 490 }}>
      {loading === 'undefined' ? (
        len !== 0 ? (
          <End loadMore={loadMore} isLastPage={isLastPage} loading={loading} />
        ) : null
      ) : len !== 0 && !loading ? (
        <End loadMore={loadMore} isLastPage={isLastPage} loading={loading} />
      ) : null}
    </div>
  );
}

export default SectionsEnd;
