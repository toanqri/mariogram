import React from 'react';
import { Button } from 'semantic-ui-react';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';

function AdvancedUnfollow({ username, unfollowed }) {
  function _unfollow() {
    api.post(`/users/${username}/unfollow`)
      .then((response) => {
        showSuccess(response.message);
        unfollowed();
      })
      .catch((error) => showError(error.message));
  }

  return (
    <Button compact positive onClick={_unfollow} size="tiny">Unfollow</Button>
  );
}

export default AdvancedUnfollow;
