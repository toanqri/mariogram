import React from 'react';
import { Button } from 'semantic-ui-react';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';

function Unfollow({ username, unfollowed }) {
  function _unfollow() {
    api.post(`/users/${username}/unfollow`)
      .then((response) => {
        showSuccess();
        unfollowed();
      })
      .catch((error) => showError(error.message));
  }

  return (
    <>
      <Button color="green" onClick={_unfollow}>Unfollow</Button>
    </>
  );
}

export default Unfollow;
