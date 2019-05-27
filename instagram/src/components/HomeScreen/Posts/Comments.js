import React from 'react';
import { comment } from 'postcss';

const Comments = ({ comments }) => {
  return (
    <div>
      <span>
        {comments.length > 1 ? (
          <span>View all {comments.length} comments</span>
        ) : (
          <span>View 1 comment</span>
        )}
      </span>
      <br />
      <strong>{comments[0].user}</strong>
      {comments[0].comment}
    </div>
  );
};

export default Comments;
