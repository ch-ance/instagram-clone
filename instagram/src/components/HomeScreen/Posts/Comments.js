import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { useStateValue } from '../../../state';

const Comments = ({ comments, post }) => {
  const [{ selectedPost }, dispatch] = useStateValue();

  return (
    <div>
      <span>
        {comments.length > 1 ? (
          <span>
            <button
              onClick={() => {
                dispatch({
                  type: 'SELECT_POST',
                  post
                });
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
