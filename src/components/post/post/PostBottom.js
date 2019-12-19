import React, { useEffect, useState } from 'react';
import {
  Button, Comment, Icon, Input,
} from 'semantic-ui-react';
import { humanReadable } from '../../../utils/utils';
import Comments from '../comment/comments/Comments';
import AppLink from '../../others/link/Link';
import { DEFAULT_AVATAR } from '../../../config/Constants';
import api from '../../../api/helpers';
import { showError } from '../../../utils/helpers';
import { useAuth } from '../../../context/auth';

function PostBottom({ postDetails }) {
  const [numberOfComments, setNumberOfComments] = useState(postDetails.numberOfComments || 0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const { currentUser } = useAuth();

  function _getComments() {
    setLoading(true);
    api.get(`/posts/${postDetails.id}/comments`)
      .then((response) => {
        setComments(response.content);
      })
      .catch((error) => {
        showError(error.message);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getComments();
  }, []);

  function _comment() {
    setLoading(true);
    api.post(`/posts/${postDetails.id}/comments`, { text })
      .then((response) => {
        setNumberOfComments(numberOfComments + 1);
        setComments([...comments, response]);
        setText('');
      })
      .catch((error) => showError(error))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <AppLink
        url={`/post/${postDetails.id}`}
        className="p_comments"
        label={humanReadable(numberOfComments, 'comment')}
      />
      <Comments
        comments={postDetails.when === 'feed' ? comments.slice(Math.max(comments.length - 3, 0)) : comments}
        decrementComments={() => setNumberOfComments(numberOfComments - 1)}
      />
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={currentUser.avatarUrl || DEFAULT_AVATAR} />
          <Comment.Content>
            <Input
              placeholder="Add a comment..."
              fluid
              icon={(
                <Button icon disabled={!text} onClick={_comment}>
                  <Icon name="paper plane" />
                </Button>
              )}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
}

export default PostBottom;
