import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faComment);
library.add(faShareSquare);

const PostFooter = ({ likes }) => {
  return (
    <div className='post-footer'>
      <div className='icons'>
        <FontAwesomeIcon className='icon' icon='heart' />
        <FontAwesomeIcon className='icon' icon='comment' />
        <FontAwesomeIcon className='icon' icon='share-square' />
      </div>
      <br />
      <span className='likes'>{likes} likes</span>
    </div>
  );
};

export default PostFooter;
