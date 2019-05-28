import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { useStateValue } from '../../../state';

const Comments = ({ history, comments, post }) => {
  const [{ selectedPost }, dispatch] = useStateValue();

  return (
    <div className='comments'>
      <span className='description-author'>{post.user.username}</span>
      <span className='description-text'>{post.description}</span>
      <br />
      <span>
        {comments.length > 1 ? (
          <span>
            <button
              className='view-more-comments'
              onClick={e => {
                e.preventDefault();
                localStorage.setItem('selectedPost', post.id);
                setTimeout(() => {
                  history.push('/viewall');
                }, 500);
              }}
            >
              View all {comments.length} comments
            </button>
          </span>
        ) : (
          <span>View 1 comment</span>
        )}
      </span>
      <br />
      <strong>{comments[0].user}</strong>
      <span className='comment-text'>{comments[0].comment}</span>
    </div>
  );
};

export default withRouter(Comments);
