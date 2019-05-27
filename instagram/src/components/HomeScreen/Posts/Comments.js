import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Comments = ({ comments, setSelectedPost, post }) => {
  return (
    <div>
      <span>
        {comments.length > 1 ? (
          <span>
            <button
              onClick={() => {
                setSelectedPost(post);
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
      {comments[0].comment}
    </div>
  );
};

export default withRouter(Comments);
