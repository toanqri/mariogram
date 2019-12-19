import React from 'react';
import { Comment } from 'semantic-ui-react';
import moment from 'moment';
import { DEFAULT_AVATAR } from '../../../../config/Constants';

function Comments({ comments, decrementComments }) {
  return (
    <Comment.Group>
      {(comments || []).map((comment) => (
        <Comment key={comment.id}>
          <Comment.Avatar src={comment.owner.avatarUrl || DEFAULT_AVATAR} />
          <Comment.Content>
            <Comment.Author as="a">{comment.owner.username}</Comment.Author>
            <Comment.Metadata>
              <div>{moment(comment.commentedDate).calendar()}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.text}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
}

export default Comments;
