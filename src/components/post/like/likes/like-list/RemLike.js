import React, { Fragment } from 'react';
// import Notify from 'handy-notification';
import { connect } from 'react-redux';
import { number, func } from 'prop-types';
import SecondaryButton from '../../../../others/button/SecondaryButton';

const RemoveLikeAsAdmin = ({ like_id, decrementLikes, dispatch }) => {
  const remLikeAsAdmin = (e) => {
    e.preventDefault();
    // dispatch(removeLike(like_id));
    decrementLikes();
    // Notify({ value: 'Removed like as admin!!' });
  };

  return (
    <>
      <SecondaryButton label="Remove as admin" onClick={remLikeAsAdmin} />
    </>
  );
};

RemoveLikeAsAdmin.propTypes = {
  like_id: number.isRequired,
  decrementLikes: func.isRequired,
};

export default connect()(RemoveLikeAsAdmin);
export { RemoveLikeAsAdmin as PureRemoveLikeAsAdmin };
