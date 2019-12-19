import React, { useEffect, useState } from 'react';
import { Button, Rating, Table } from 'semantic-ui-react';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';
import AppLink from '../../others/link/Link';

function UnhealthyPosts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  function _getFeed() {
    setLoading(true);
    api.get('/posts?isHealthy=true')
      .then((response) => {
        setPosts(response.content);
      })
      .catch((error) => showError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getFeed();
  }, []);

  function _enable(postId) {
    api.post(`/admin/posts/${postId}?active=true`)
      .then((response) => showSuccess())
      .catch((error) => showError(error.message));
  }

  function _disable(postId) {
    api.post(`/admin/posts/${postId}?active=false`)
      .then((response) => showSuccess())
      .catch((error) => showError(error.message));
  }

  return (
    <Table compact celled size="large">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Owner</Table.HeaderCell>
          <Table.HeaderCell>Post</Table.HeaderCell>
          <Table.HeaderCell>Posted Date</Table.HeaderCell>
          <Table.HeaderCell>Number Of Likes</Table.HeaderCell>
          <Table.HeaderCell>Number Of Comments</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {posts.map((post) => (
          <Table.Row>
            <Table.Cell>{post.owner.username}</Table.Cell>
            <Table.Cell>
              <AppLink
                url={`/post/${post.id}`}
                className="p_comments"
                label={post.text}
              />
            </Table.Cell>
            <Table.Cell>{post.postedDate}</Table.Cell>
            <Table.Cell>{post.numberOfLikes}</Table.Cell>
            <Table.Cell>{post.numberOfComments}</Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button primary icon="check" onClick={() => _enable(post.id)} />
                <Button.Or text="" />
                <Button icon="close" onClick={() => _disable(post.id)} />
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default UnhealthyPosts;
