import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { Me } from '../../../../utils/utils';
import AppLink from '../../../others/link/Link';
import { Image } from 'semantic-ui-react';

function Comment({ comment }) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(comment.text);
  }, [comment]);

  return (
    <div>
      <div className={classNames('comments', { my_comment: Me(comment.owner.username) })}>
        <Image
          className="comments_avatar"
          src={comment.owner.avatarUrl}
        />

        <div className="comments_content">
          <AppLink
            url={`/profile/${comment.owner.username}`}
            className="comments_user"
            label={comment.owner.username}
          />

          <p className="ce">
            {text}
          </p>

          <div className="comments_bottom">
            <span className="comments_time">{moment(comment.commentedDate).fromNow()}</span>
          </div>

          {/*<CommentOptions*/}
          {/*  commentDetails={{*/}
          {/*    comment_id,*/}
          {/*    comment_by,*/}
          {/*    text,*/}
          {/*    type,*/}
          {/*    commentSrc,*/}
          {/*  }}*/}
          {/*  decrementComments={decrementComments}*/}
          {/*  updateCommentText={(value) => this.setState({ text: value })}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
}

export default Comment;
