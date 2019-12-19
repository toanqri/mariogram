import React from 'react';
import { Image } from 'semantic-ui-react';
import FileInput from '../../others/input/File';
import TextArea from '../../others/input/TextArea';
import { useAuth } from '../../../context/auth';

function PostItMiddle({
  fileChanged, onFileChanged,
  text, onTextChanged,
  previewImg, onPreviewImgChanged,
  fileInput, onFileInputChanged,
  onTargetFileChanged,
}) {
  const { currentUser } = useAuth();


  const fileChange = (e) => {
    e.preventDefault();
    onFileChanged(true);
    onFileInputChanged(e.target.value);
    const reader = new FileReader();
    const file = e.target.files[0];
    onTargetFileChanged(file);

    reader.onload = (ee) => onPreviewImgChanged(ee.target.result);
    reader.readAsDataURL(file);
  };

  const valueChange = (e) => onTextChanged(e.target.value);

  return (
    <div className="i_p_main p_main" style={{ height: 296 }}>
      {// Show if image/file is selected
      fileChanged ? (
        <div>
          <div className="i_p_ta">
            <TextArea
              placeholder={`What's new with you, @${currentUser.username}?`}
              value={text}
              valueChange={valueChange}
              className="t_p_ta"
            />
          </div>
          <div className="i_p_img">
            <Image src={previewImg} />
          </div>
        </div>
      ) : (
        // If not show button to select
        <form
          className="post_img_form"
          method="post"
          encType="multipart/formdata"
        >
          <FileInput
            value={fileInput}
            fileChange={fileChange}
            label="Choose an image"
            labelClass="pri_btn"
          />
        </form>
      )
}
    </div>
  );
}

export default PostItMiddle;
