import React, { useEffect, useState } from 'react';
import { Button, Rating, Table } from 'semantic-ui-react';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';
import AppLink from '../../others/link/Link';

function Advertisements() {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);

  function _getAds() {
    setLoading(true);
    api.get('/advertisements')
      .then((response) => {
        setAds(response.content);
        console.log('rrrr', response);
      })
      .catch((error) => showError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getAds();
  }, []);


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

      {/*<Table.Body>*/}
      {/*  {ads.map((ads) => (*/}
      {/*    <Table.Row>*/}
      {/*      <Table.Cell>{post.owner.username}</Table.Cell>*/}
      {/*      <Table.Cell>*/}
      {/*        <AppLink*/}
      {/*          url={`/post/${post.id}`}*/}
      {/*          className="p_comments"*/}
      {/*          label={post.text}*/}
      {/*        />*/}
      {/*      </Table.Cell>*/}
      {/*      <Table.Cell>{post.postedDate}</Table.Cell>*/}
      {/*      <Table.Cell>{post.numberOfLikes}</Table.Cell>*/}
      {/*      <Table.Cell>{post.numberOfComments}</Table.Cell>*/}
      {/*      <Table.Cell>*/}
      {/*        <Button.Group>*/}
      {/*          <Button primary icon="check" onClick={() => _enable(post.id)} />*/}
      {/*          <Button.Or text="" />*/}
      {/*          <Button icon="close" onClick={() => _disable(post.id)} />*/}
      {/*        </Button.Group>*/}
      {/*      </Table.Cell>*/}
      {/*    </Table.Row>*/}
      {/*  ))}*/}
      {/*</Table.Body>*/}
    </Table>
  );
}

export default Advertisements;
