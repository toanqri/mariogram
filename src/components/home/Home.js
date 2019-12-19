import React, { useState, useEffect } from 'react';
import { FadeIn } from 'animate-components';
import { Instagram } from 'react-content-loader';
import Title from '../others/Title';
import Suggested from '../others/suggested/Suggested';
import PostItTeaser from '../post/post-it/PostItTeaser';
import Feed from './Feed';
import api from '../../api/helpers';
import { showError } from '../../utils/helpers';
import { DEFAULT_PAGE, DEFAULT_SIZE } from '../../config/Constants';

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(1);

  function _getFeed() {
    setLoading(true);
    api.get(`/posts/home?page=${page}&size=${DEFAULT_SIZE}`)
      .then((response) => {
        if (page === 0) {
          setPosts(response.content);
        } else {
          setPosts([...posts, ...response.content]);
        }
        setTotalPages(response.totalPages);
      })
      .catch((error) => showError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getFeed();
  }, [page]);

  function _addNewPost(post) {
    setPosts([post, ...posts]);
  }

  function _loadMore() {
    setPage(page + 1);
  }

  return (
    <div>
      <Title value="Home" />
      <FadeIn duration="300ms">
        <div className="senapati home_senapati">
          <div className="prajkumar">
            <PostItTeaser disabled={loading} onCompleted={_addNewPost} />
            {loading && (
            <div style={{ marginTop: 20 }}>
              <Instagram />
              <Instagram />
              <Instagram />
            </div>
            )}
            <Feed
              posts={posts}
              isLastPage={totalPages === page + 1}
              loadMore={_loadMore}
              loading={loading}
            />
          </div>
          <div className="srajkumar">
            <Suggested when="home" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
