import React, { useState, useEffect } from 'react';

import { useStateValue } from '../../../state';

const ViewComments = ({ post }) => {
  const [{ posts }, dispatch] = useStateValue();

  console.log('POSTS: ', posts);

  console.log('Passed down post: ', post);
  const [commentText, setCommentText] = useState('');
  const [selectedPost] = posts.filter(post => {
    // return post.id == localStorage.getItem('selectedPost');
    return post.id == 1;
  });
  console.log('ADSSDSDSD: ', selectedPost);

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
              postId: parseInt(localStorage.getItem('selectedPost')),
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
