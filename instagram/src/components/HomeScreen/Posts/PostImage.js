import React from 'react';

const PostImage = ({ image }) => {
  return (
    <div className='post-image-container'>
      <img className='postImage' src={image} />
    </div>
  );
};

export default PostImage;
