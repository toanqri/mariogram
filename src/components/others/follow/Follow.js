import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';

function Follow({ username, followed, updateFollowers }) {
  function _follow() {
    api.post(`/users/${username}/follow`)
      .then((response) => {
        showSuccess();
        followed();
      })
      .catch((error) => showError(error.message));
  }

  return (
    <>
      <Button color="blue" onClick={_follow}>Follow</Button>
    </>
  );
}

export default Follow;
