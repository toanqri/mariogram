import React from 'react';
import Spinner from './Spinner';
import Loading from './Loading';

function IsLoading({ loading, when }) {
  return (
    <>
      {loading ? when === 'page' ? <Loading /> : <Spinner /> : null}
    </>
  );
}

export default IsLoading;
