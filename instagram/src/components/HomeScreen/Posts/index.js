import React from 'react';
import Post from './Post';

import { useStateValue } from '../../../state';

const PostsContainer = () => {
  const [{ posts }, dispatch] = useStateValue();

  return (
    <div>
      {posts.map(post => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default PostsContainer;
