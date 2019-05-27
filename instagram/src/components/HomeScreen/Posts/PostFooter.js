import React from 'react';

const PostFooter = ({ likes }) => {
  return (
    <div>
      <span>Like</span>
      <span>Comment</span>
      <span className={likes}>{likes} likes</span>
    </div>
  );
};

export default PostFooter;
