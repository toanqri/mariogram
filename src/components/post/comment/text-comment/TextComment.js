import React, { useState } from 'react';
import TextCommentModal from './CommentModal';

function TextComment({ postDetails, incrementComments, onCompleted }) {
  const [comment, setComment] = useState(false);

  return (
    <>
      <div
        className="p_cit_teaser"
        onClick={() => setComment(true)}
      >
        <span>Add a comment...</span>
      </div>

      {comment && (
        <TextCommentModal
          post={postDetails}
          postOwner={postDetails.owner}
          back={() => setComment(false)}
          incrementComments={incrementComments}
          onCompleted={onCompleted}
        />
      )}
    </>
  );
}

export default TextComment;
