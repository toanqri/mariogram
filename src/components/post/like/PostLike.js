import React, { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import api from '../../../api/helpers';
import { showError } from '../../../utils/helpers';

function PostLike({ postDetails, incrementWhat, decrementWhat }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(postDetails.liked);
  }, []);

  async function _like() {
    api.post(`/posts/${postDetails.id}/like`)
      .then((response) => {
        setLiked(true);
        incrementWhat();
      })
      .catch((error) => showError(error.message));
  }

  async function _unlike() {
    api.post(`/posts/${postDetails.id}/unlike`)
      .then((response) => {
        setLiked(false);
        decrementWhat();
      })
      .catch((error) => showError(error.message));
  }

  return (
    <>
      <div className="p_Like_wra">
        {liked ? (
          <span
            className="p_like p_unlike_icon"
            data-tip="Unlike"
            onClick={_unlike}
          >
            <MdFavorite />
          </span>
        ) : (
          <span
            className="p_like p_like_icon"
            data-tip="Like"
            onClick={_like}
          >
            <MdFavoriteBorder />
          </span>
        )}
      </div>
    </>
  );
}

export default PostLike;
