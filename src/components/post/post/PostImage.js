import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import ImageTheatre from '../../others/imageTheatre/ImageTheatre';

function PostImage({ postDetails }) {
  const [showImage, setShowImage] = useState(false);

  function _toggle() {
    setShowImage(!showImage);
  }

  return (
    <div>
      <div className="p_o">
        <div className="p_actual" spellCheck="false">
          {postDetails.media && postDetails.media.length ? (
            postDetails.media[0].type === 'IMAGE' ? (
              <Image
                src={postDetails.media[0].url}
                className="p_img"
                onClick={() => _toggle('showImage')}
              />
            ) : postDetails.media[0].type === 'VIDEO' ? (
              <video style={{ maxWidth: 468 }} controls>
                <source src={postDetails.media[0].url} type="video/mp4" />
              </video>
            ) : null
          ) : null}
        </div>
      </div>

      {showImage && (
        postDetails.media && postDetails.media.length ? (
          <ImageTheatre
            imgSrc={postDetails.media[0].url}
            username={postDetails.owner.username}
            time={postDetails.postedDate}
            link={`/post/${postDetails.id}`}
            back={() => _toggle('showImage')}
          />
        ) : null
      )}
    </div>
  );
}

export default PostImage;
