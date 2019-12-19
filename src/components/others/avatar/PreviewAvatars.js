import React from 'react';
import { FadeIn } from 'animate-components';
import { Image } from 'semantic-ui-react';
import ModalHeader from '../modal/ModalHeader';
import PrimaryButton from '../button/PrimaryButton';
import SecondaryButton from '../button/SecondaryButton';
import Overlay from '../Overlay';

function PreviewAvatar({ previewAvatar, back, upload }) {
  return (
    <>
      <Overlay />
      <div className="preview_avatar modal">
        <FadeIn duration="300ms">
          <ModalHeader title="Change Avatar" />

          <div className="c_a_middle">
            <Image src={previewAvatar} />
          </div>

          <div className="c_a_bottom modal_bottom">
            <SecondaryButton label="Cancel" onClick={back} />
            <PrimaryButton
              label="Change avatar"
              onClick={upload}
              extraClass="c_a_add"
            />
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default PreviewAvatar;
