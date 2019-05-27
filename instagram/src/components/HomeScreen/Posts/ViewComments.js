import React from 'react';

const ViewComments = ({ comments, description, author }) => {
  return (
    <div>
      <ul>
        {description && (
          <li>
            <strong>{author}</strong> {description}
          </li>
        )}
        {comments.map(comment => {
          return (
            <li>
              <strong>{comment.user}</strong>
              {comment.comment}
            </li>
          );
        })}
      </ul>
      <div className={addComment}>
        <input type='text' placeholder='add a comment' />
      </div>
    </div>
  );
};

export default ViewComments;
