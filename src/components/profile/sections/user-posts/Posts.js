import React, { useEffect, useState } from 'react';
import { FadeIn } from 'animate-components';
import Post from '../../../post/post/Post';
import MapPosts from '../../../post/map-posts/MapPosts';
import api from '../../../../api/helpers';
import { showError } from '../../../../utils/helpers';
import Loading from '../../../others/IsLoading';
import { DEFAULT_PAGE, DEFAULT_SIZE } from '../../../../config/Constants';
import { useAuth } from '../../../../context/auth';
import SectionsEnd from '../../../others/SectionsEnd';

function Posts({ username }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(1);
  const { currentUser } = useAuth();

  function _getUserPosts() {
    setLoading(true);
    api.get(`/users/${username}/timeline?page=${page}&size=${DEFAULT_SIZE}`)
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
    _getUserPosts();
  }, [page]);

  function _loadMore() {
    setPage(page + 1);
  }

  return (
    <div>
      <FadeIn duration="300ms">
        <div className="senapati pro_senapati">
          <div style={{ width: 800 }}>
            <div className="prajkumar">

              <Loading loading={loading} when="page" />

              <MapPosts
                posts={posts.map((p) => (
                  <Post key={p.id} post={p} when="userPosts" />
                ))}
                nothingMssg={currentUser.username === username ? 'You have no posts!!' : `${username} has no posts!!`}
              />
            </div>
          </div>
        </div>

        <SectionsEnd
          len={posts.length}
          isLastPage={totalPages === page + 1}
          loadMore={_loadMore}
          loading={loading}
        />
      </FadeIn>
    </div>
  );
}

export default Posts;
