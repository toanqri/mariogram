import React, { useState } from 'react';
import { FadeIn } from 'animate-components';
import ToolTip from 'react-tooltip';
import { Checkbox } from 'semantic-ui-react';
import Overlay from '../../others/Overlay';
import PostItHeader from './PostItHeader';
import PostItMiddle from './PostItMiddle';
import PostItActions from './PostItActions';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';

function PostIt({ back, onCompleted }) {
  const [fileInput, setFileInput] = useState('');
  const [fileChanged, setFileChanged] = useState(false);
  const [targetFile, setTargetFile] = useState(null);
  const [previewImg, setPreviewImg] = useState('');
  const [text, setText] = useState('');
  const [notify, setNotify] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  function _addPost() {
    if (!targetFile) {
      return;
    }

    const data = new FormData();
    data.append('files', targetFile);
    data.append('text', text);
    data.append('notify', notify);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    api.client.post('/posts', data, config)
      .then((response) => {
        showSuccess(response.data.message);
        onCompleted(response.data.data);
      })
      .catch((error) => {
        showError(error.message);
      });
  }

  return (
    <div>
      <Overlay />

      <div className="post" style={{ left: '50%' }}>
        <FadeIn duration="300ms">
          <PostItHeader />
          <PostItMiddle
            fileChanged={fileChanged}
            onFileChanged={setFileChanged}
            text={text}
            onTextChanged={setText}
            previewImg={previewImg}
            onPreviewImgChanged={setPreviewImg}
            fileInput={fileInput}
            onFileInputChanged={setFileInput}
            onTargetFileChanged={setTargetFile}
          />
          <div className="t_p_bottom p_bottom">
            <div
              className="t_p_tag p_tag"
              style={{ visibility: !fileChanged && 'hidden' }}
            >
              <Checkbox toggle label="Notify" checked={notify} onChange={() => setNotify(!notify)} />
            </div>
            <PostItActions
              toggleOverlay={() => setShowOverlay(!showOverlay)}
              back={back}
              fileChanged={fileChanged}
              onSubmit={_addPost}
            />
          </div>
        </FadeIn>
      </div>

      {showOverlay && <Overlay type="white" />}
      <ToolTip />
    </div>
  );
}

export default PostIt;
