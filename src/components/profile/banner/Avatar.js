import React, { useEffect, useState } from 'react';
import { Image } from 'semantic-ui-react';
import { toggle } from '../../../utils/utils';
import d from '../../../utils/API/DOM';
import ViewAvatarAction from '../../others/avatar/actions/ViewAvatar';
import { DEFAULT_AVATAR } from '../../../config/Constants';
import FileInput from '../../others/input/File';
import PreviewAvatar from '../../others/avatar/PreviewAvatars';
import api from '../../../api/helpers';
import { showError, showSuccess } from '../../../utils/helpers';

function BannerAvatar({ id, avatarUrl, isMe }) {
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
  const [viewAvatar, setViewAvatar] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [fileAvatarChanged, setFileAvatarChanged] = useState(false);
  const [fileInput, setFileInput] = useState('');
  const [previewAvatar, setPreviewAvatar] = useState('');
  const [targetFile, setTargetFile] = useState('');

  useEffect(() => {
    setAvatar(avatarUrl);
  }, [avatarUrl]);

  function _toggleAvatarOptions() {
    toggle(new d('.pro_avatar_ch_teaser').toDOM());
  }

  function _previewAvatar(e) {
    setFileAvatarChanged(true);
    setFileInput(e.target.value);
    const reader = new FileReader();
    const file = e.target.files[0];
    setTargetFile(file);
    reader.onload = (e) => setPreviewAvatar(e.target.result);
    reader.readAsDataURL(file);
  }

  function _previewAvatarBack() {
    setFileAvatarChanged(false);
    setFileInput('');
    setTargetFile('');
    setPreviewAvatar('');
  }

  function _uploadAvatar() {
    if (!targetFile) {
      return;
    }

    const data = new FormData();
    data.append('avatar', targetFile);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    api.client.put('/users/avatar', data, config)
      .then((response) => {
        console.log('res', response);
        showSuccess(response.data.message);
        setAvatar(previewAvatar);
        _previewAvatarBack();
      })
      .catch((error) => {
        showError(error.message);
      });
  }

  return (
    <>
      <div
        className="pro_avatar"
        onMouseOver={_toggleAvatarOptions}
        onMouseOut={_toggleAvatarOptions}
      >
        <Image src={avatar || DEFAULT_AVATAR} />

        <div className="pro_avatar_ch_teaser" style={{ display: 'none' }}>
          <span
            className="view_avatar_span"
            onClick={() => setViewAvatar(!viewAvatar)}
          >
              View
          </span>

          {isMe && (
          <form
            className="pro_ch_form"
            method="post"
            encType="multipart/formdata"
          >
            <FileInput
              value={fileInput}
              fileChange={_previewAvatar}
              label="Upload avatar"
              labelClass="sec_btn"
            />
          </form>
          )}
        </div>
      </div>

      {/* <ChangeAvatarAction */}
      {/*  change={changeAvatar} */}
      {/*  back={() => setChangeAvatar(!changeAvatar)} */}
      {/*  when="user" */}
      {/* /> */}

      {fileAvatarChanged ? (
        <PreviewAvatar
          previewAvatar={previewAvatar}
          back={_previewAvatarBack}
          upload={_uploadAvatar}
        />
      ) : null}

      <ViewAvatarAction
        view={viewAvatar}
        back={() => setViewAvatar(!viewAvatar)}
        when="user"
      />
    </>
  );
}

export default BannerAvatar;
