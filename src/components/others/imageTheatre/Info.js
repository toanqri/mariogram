import React, { Fragment } from 'react';
import { string, bool } from 'prop-types';
import moment from 'moment';
import AppLink from '../link/Link';

const ImageTheatreInfo = (props) => {
  const {
    showInfo, username, time, link,
  } = props;

  const ago = moment(time) ? moment(time).fromNow().replace(' ago', '') : null;

  const imgBy = `by ${username} (${ago})`;

  return (
    <>
      {showInfo ? (
        <div className="img_s_bottom">
          <span className="img_s_by">{imgBy}</span>
          <AppLink
            url={link}
            className="img_s_window"
            data-tip="Open separately"
          >
            {/*<MaterialIcon icon="open_in_new" />*/}
          </AppLink>
        </div>
      ) : null}
    </>
  );
};

ImageTheatreInfo.propTypes = {
  showInfo: bool,
  username: string,
  link: string,
  time: string,
};

export default ImageTheatreInfo;
