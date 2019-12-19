import React, { Fragment } from 'react';
import { FadeIn } from 'animate-components';
import ToolTip from 'react-tooltip';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import Overlay from '../Overlay';
import ImageTheatreInfo from './Info';

const ImageTheatre = (props) => {
  const { imgSrc, filter, back } = props;

  return (
    <>
      <Overlay close_on_click close={back} opacity={0.9} />

      <div className="image_show">
        <FadeIn duration="300ms">
          <div className="img_s_img">
            <Image src={imgSrc} className={filter} />

            <ImageTheatreInfo {...props} />
          </div>

          <ToolTip />
        </FadeIn>
      </div>
    </>
  );
};

export default ImageTheatre;
