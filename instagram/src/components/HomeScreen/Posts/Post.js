import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';
import Comments from './Comments';

import ViewComments from './ViewComments';

import { useStateValue } from '../../../state';

const Post = ({ post }) => {
  //   const [{ count }, dispatch] = useStateValue();

  const [{ selectedPost }, dispatch] = useStateValue();

  if (selectedPost !== null) {
    return <ViewComments post={selectedPost} />;
  }

  return (
    <div>
      <PostHeader user={post.user} />
      <PostImage image={post.imageUrl} />
      <PostFooter likes={post.likes} />
      <Comments comments={post.comments} post={post} />
    </div>
  );
  {
    /* <h3>Count: {count}</h3>
      <button
        onClick={() =>
          dispatch({
            type: 'INCREMENT'
          })
        }
      >
        Increment
      </button> */
  }
  const examplePostFromState = {
    user: 'neymarjr',
    likes: 1108061,
    description: '"Spirit of the Brave"',
    imageUrl:
      'https://scontent-ort2-1.cdninstagram.com/vp/4cc5de878ed6c769d205f93adf84e19e/5D966EA1/t51.2885-15/e35/p320x320/59695637_401291657151771_1836917351015504372_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com',
    comments: [
      {
        user: 'talitadonega',
        comment: 'Que foto!'
      },
      {
        user: 'guiunesgb',
        comment: 'Oss yes'
      }
    ]
  };
};

export default Post;
