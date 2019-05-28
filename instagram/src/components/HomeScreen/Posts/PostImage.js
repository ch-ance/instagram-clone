import React from 'react';

const PostImage = ({ image }) => {
  const style = {
    width: '100vw'
  };
  return (
    <div style={style}>
      <img className='postImage' style={style} src={image} />
    </div>
  );
};

export default PostImage;
