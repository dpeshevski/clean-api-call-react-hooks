import './App.css';
import React, { useEffect } from 'react';

import useApi from './useApi';

import commentsApi from './api/comments';
import postsApi from './api/posts';

function App() {
  const getPostsApi = useApi(postsApi.getPosts);
  const getCommentsApi = useApi(commentsApi.getComments);
  
  useEffect(() => {
    getPostsApi.request();
    getCommentsApi.request();
  }, []);

  return (
    <div className="App">
      {/* Post List */}
      <div>
        <h1>Posts</h1>
        {getPostsApi.loading && <p>Posts are loading...</p>}
        {getPostsApi.error && <p>{getPostsApi.error}</p>}
        <ul>
          {getPostsApi.data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      {/* Comment List */}
      <div>
        <h1>Comments</h1>
        {getCommentsApi.loading && <p>Comments are loading...</p>}
        {getCommentsApi.error && <p>{getCommentsApi.error}</p>}
        <ul>
          {getCommentsApi.data?.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
