import React from 'react';
import { Button } from 'semantic-ui-react';

function PostItActions({
  toggleOverlay, fileChanged, back, onSubmit,
}) {
  async function BackAndReset() {
    back();
  }

  async function postIt(e) {
    e.preventDefault();
    toggleOverlay();

    onSubmit();

    toggleOverlay();
    BackAndReset();
  }

  return (
    <div className="t_p_act p_act">
      <Button basic size="tiny" onClick={BackAndReset}>Cancel</Button>
      <Button primary size="tiny" onClick={postIt} disabled={!fileChanged}>Post</Button>
    </div>
  );
}

export default PostItActions;
