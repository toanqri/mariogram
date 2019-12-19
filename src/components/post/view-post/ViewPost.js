import React, { useState, useEffect } from 'react';
import { FadeIn } from 'animate-components';
import { useParams } from 'react-router-dom';
import Title from '../../others/Title';
import Suggested from '../../others/suggested/Suggested';
import Loading from '../../others/IsLoading';
import ShowPost from './ShowPost';
import { cLoading } from '../../../utils/utils';
import api from '../../../api/helpers';
import { showError } from '../../../utils/helpers';

function ViewPost() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const { postId } = useParams();

  function _getPost() {
    setLoading(true);
    api.get(`/posts/${postId}`)
      .then((response) => {
        console.log('res', response);
        setPost(response);
      })
      .catch((error) => {
        showError(error.message);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getPost();
  }, []);

  return (
    <div>
      <Title value="View post" />
      <FadeIn duration="300ms">
        <div className="senapati view_senapati">
          <div className="prajkumar">
            <Loading loading={loading} />
            <div className={cLoading(loading)}>
              <ShowPost post={post} />
            </div>
          </div>
          <div className="srajkumar">
            <Suggested />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default ViewPost;
