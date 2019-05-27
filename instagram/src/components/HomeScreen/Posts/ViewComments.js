import React, { useState } from 'react';

import { useStateValue } from '../../../state';

const ViewComments = ({ post }) => {
  const [{ posts }, dispatch] = useStateValue();

  const [thisPost] = posts.filter(eachPost => {
    return eachPost.id === post.id;
  });

  const [commentText, setCommentText] = useState('');

  return (
    <div>
      <ul>
        {thisPost.description && (
          <li>
            <strong>{thisPost.user}</strong> {thisPost.description}
          </li>
        )}
        {thisPost.comments.map(comment => {
          return (
            <li>
              <strong>{comment.user}</strong>
              {comment.comment}
            </li>
          );
        })}
      </ul>
      <div className='addComment'>
        <form>
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
