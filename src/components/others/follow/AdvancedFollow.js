import React from 'react';
import { Button } from 'semantic-ui-react';
import { showError, showSuccess } from '../../../utils/helpers';
import api from '../../../api/helpers';

function AdvancedFollow({ username, followed }) {
  function _follow() {
    api.post(`/users/${username}/follow`)
      .then((response) => {
        showSuccess(response.message);
        followed();
      })
      .catch((error) => showError(error.message));
  }

  return (
    <Button compact primary onClick={_follow} size="tiny">Follow</Button>
  );
}

export default AdvancedFollow;
