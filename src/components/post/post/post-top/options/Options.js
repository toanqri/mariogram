import React, { useState } from 'react';
import moment from 'moment';
import { MdExpandMore } from 'react-icons/md';
import PostOptionLists from './OptionsList';

function PostOptions({ postDetails, updateText }) {
  const [showOptions, setShowOptions] = useState(false);

  function _toggle() {
    setShowOptions(!showOptions);
  }


  return (
    <div>
      <div className="p_i_2">
        <div className="p_time">
          <span>{postDetails.postedDate && moment(postDetails.postedDate).fromNow().replace(/\s ago/, '')}</span>
        </div>
        <div className="p_h_opt">
          <span className="exp_p_menu" onClick={_toggle}>
            <MdExpandMore />
          </span>
        </div>
      </div>

      {showOptions && (
      <div
        className="options p_options"
        style={{
          top: 48,
        }}
      >
        <PostOptionLists
          postDetails={postDetails}
          toggleOptions={_toggle}
          updateDescription={updateText}
        />
      </div>
      )}
    </div>
  );
}

export default PostOptions;
