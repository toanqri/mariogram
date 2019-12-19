import React from 'react';
import Helmet from 'react-helmet';
import d from '../../utils/API/DOM';

function Title({ value, desc, un }) {
  // for removing app default description in the topHeader.hbs
  // to avoid two meta tags for description
  new d('meta[data-desc-src="hbs"]').remove();

  return (
    <Helmet>
      <title>
        {un ? `(${un})` : ''}
        {' '}
        {`${value}`}
        {' '}
        • MarioGram
      </title>
      <meta name="description" content={desc} />
    </Helmet>
  );
}

Title.defaultProps = {
  value: '',
  desc:
    "MarioGram lets you capture, follow, like and share world's moments in a better way and tell your story with photos, messages, posts and everything in between!!",
};

export default Title;
