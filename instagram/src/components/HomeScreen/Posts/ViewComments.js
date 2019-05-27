import React, { useState, useEffect } from 'react';

import { useStateValue } from '../../../state';

const ViewComments = ({ post }) => {
  const [{ posts }, dispatch] = useStateValue();

  const [commentText, setCommentText] = useState('');
  const [selectedPost] = posts.filter(post => {
    // return post.id == localStorage.getItem('selectedPost');
    return post.id == 1;
  });
  console.log('comments: ', selectedPost.comments);

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
              postId: selectedPost.id,
              commentText
            });
            setCommentText('');
          }}
        >
          <input
            type='text'
            placeholder='add a comment'
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ViewComments;
