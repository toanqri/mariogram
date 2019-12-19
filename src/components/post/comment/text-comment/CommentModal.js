import React, { useState } from 'react';
import { FadeIn } from 'animate-components';
import PrimaryButton from '../../../others/button/PrimaryButton';
import ModalBack from '../../../others/modal/ModalBack';
import TextArea from '../../../others/input/TextArea';
import Overlay from '../../../others/Overlay';
import api from '../../../../api/helpers';
import { showError, showSuccess } from '../../../../utils/helpers';

function TextCommentModal({
  back, post, postOwner, incrementComments, onCompleted,
}) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  async function _comment(e) {
    e.preventDefault();
    setLoading(true);
    api.post(`/posts/${post.id}/comments`, { text })
      .then((response) => {
        incrementComments();
        onCompleted(response);
      })
      .catch((error) => showError(error))
      .finally(() => setLoading(false));
    back();
  }

  return (
    <div>
      <Overlay />

      <div className="edit_post modal">
        <FadeIn duration="300ms">
          <div className="e_p_header modal_header">
            <span className="title">Comment post</span>
          </div>

          <div className="e_p_middle modal_middle">
            <TextArea
              placeholder="Comment.."
              autoFocus
              value={text}
              valueChange={(e) => setText(e.target.value)}
              className="c_p_textarea"
            />
          </div>

          <div className="e_p_bottom modal_bottom">
            <ModalBack back={back} btnType="secondary" />
            <PrimaryButton
              label="Comment"
              onClick={_comment}
              disabled={!text}
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}


export default TextCommentModal;
