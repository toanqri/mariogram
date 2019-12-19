import React from 'react';
import OpenPost from './OpenPost';
import EditPostOption from './DditPost';
import DeletePostOption from './DeletePost';

function PostOptionLists({ postDetails, toggleOptions, updateDescription }) {
  const {
    id, owner, when, text,
  } = postDetails;

  return (
    <div>
      <ul>
        <OpenPost when={when} post_id={id} />
        <EditPostOption
          postDetails={{ owner, id, text }}
          updateDescription={updateDescription}
          toggleOptions={toggleOptions}
        />
        <DeletePostOption
          postDetails={{ id, owner, when }}
          toggleOptions={toggleOptions}
        />
      </ul>
    </div>
  );
}

export default PostOptionLists;
