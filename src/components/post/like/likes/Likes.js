import React, { useState } from 'react';
import { FadeIn } from 'animate-components';
import { Scrollbars } from 'react-custom-scrollbars';
import Title from '../../../others/Title';
import LikeList from './like-list/LikeList';
import { llr } from '../../../../utils/utils';
import ModalHeader from '../../../others/modal/ModalHeader';
import ModalBack from '../../../others/modal/ModalBack';
import ModalMiddle from '../../../others/modal/ModalMiddle';
import Loading from '../../../others/IsLoading';
import Overlay from '../../../others/Overlay';

function Likes({ postId, back, decrementLikes }) {
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState([]);

  function _getPostLikes() {

  }

  // componentDidMount = () => {
  //   const { post, dispatch } = this.props;
  //   dispatch(getPostLikes(post));
  // }
  //
  // componentWillReceiveProps = () => this.setState({ loading: false })
  //
  // componentDidUpdate = () => llr()

  const mapLikes = likes.map((l) => (
    <LikeList key={l.like_id} {...l} decrementLikes={decrementLikes} />
  ));

  return (
    <>
      <Overlay />

      <div className="likes modal modal_big">
        <Title value="Likes" />

        <FadeIn duration="300ms">
          <ModalHeader title="Likes" />

          <Scrollbars style={{ height: 450 }} className="modal_middle">
            <Loading loading={loading} />
            <ModalMiddle loading={loading} list={mapLikes} />
          </Scrollbars>

          <div className="modal_bottom">
            <ModalBack back={back} />
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Likes;
