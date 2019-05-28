import React from 'react';

const PostHeader = ({ user }) => {
  return (
    <div className='postHeader'>
      <img src={user.profilePic} />
      <h3>{user.username}</h3>
    </div>
  );
};

export default PostHeader;
