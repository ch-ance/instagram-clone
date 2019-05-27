import React, { useState } from 'react';

import { useStateValue } from '../../../state';

const ViewComments = ({ post }) => {
  const [{ selectedPost }, dispatch] = useStateValue();

  const [commentText, setCommentText] = useState('');

  return (
    <div>
      <ul>
        {selectedPost.description && (
          <li>
            <strong>{selectedPost.user}</strong> {selectedPost.description}
          </li>
        )}
        {selectedPost.comments.map(comment => {
          return (
            <li>
              <strong>{comment.user}</strong>
              {comment.comment}
            </li>
          );
        })}
      </ul>
      <div className='addComment'>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch({
              type: 'ADD_COMMENT',
              postId: post.id,
              commentText
            });
          }}
        >
          <input
            type='text'
            placeholder='add a comment'
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ViewComments;
