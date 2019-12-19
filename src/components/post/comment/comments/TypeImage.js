import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageTheatre from '../../../others/imageTheatre/ImageTheatre';

export default class CommentTypeImage extends Component {
  state = {
    openImage: false,
  }

  toggleImage = () => this.setState({ openImage: !this.state.openImage })

  render() {
    const { commentSrc } = this.props;
    const { openImage } = this.state;

    return (
      <>
        <img
          className="comments_img"
          onClick={() => this.setState({ openImage: true })}
          src={`/comments/${commentSrc}`}
        />

        {openImage && (
          <ImageTheatre
            imgSrc={`/comments/${commentSrc}`}
            showInfo={false}
            back={() => this.setState({ openImage: false })}
          />
        )}
      </>
    );
  }
}

CommentTypeImage.propTypes = {
  commentSrc: PropTypes.string.isRequired,
};
