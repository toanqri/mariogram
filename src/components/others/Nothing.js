import React from 'react';
import { Image } from 'semantic-ui-react';

function Nothing({
  mssg, showMssg, secondMssg, conPage,
}) {
  return (
    <div className="home_last_mssg" style={{ border: !showMssg ? 'none' : '' }}>
      <Image src={conPage
        ? require('../../assets/images/elephant-march.png')
        : require('../../assets/images/large.jpg')}
      />
      {showMssg ? <span className="nothingMssg">{mssg}</span> : null}
      <span className="secondMssg">{secondMssg}</span>
    </div>
  );
}

export default Nothing;
