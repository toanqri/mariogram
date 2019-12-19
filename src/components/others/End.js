import React from 'react';
import { Button } from 'semantic-ui-react';
import d from '../../utils/API/DOM';

function End({ loadMore, isLastPage, loading }) {
  const toTop = () => {
    new d('.data').scrollTop();
  };

  return (
    isLastPage ? null : (
      <div style={{ marginTop: 10 }}>
        <Button basic fluid onClick={loadMore} loading={loading}>Load More...</Button>
      </div>
    )
  );
}

export default End;
