import React from 'react';
import { withRouter } from 'react-router-dom';

import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';
import Comments from './Comments';

import ViewComments from './ViewComments';

// import { useStateValue } from '../../../state';

const Post = ({ history, post }) => {
  //   const [{ count }, dispatch] = useStateValue();

  // const [{ selectedPost }, dispatch] = useStateValue();

  if (history.location.pathname === '/viewall') {
    return <ViewComments post={post} />;
  }

  return (
    <div>
      <PostHeader user={post.user} />
      <PostImage image={post.imageUrl} />
      <PostFooter likes={post.likes} />
      <Comments comments={post.comments} post={post} />
    </div>
  );
};

export default withRouter(Post);
