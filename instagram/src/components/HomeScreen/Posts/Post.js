import React from 'react';

import { useStateValue } from '../../../state';

const Post = () => {
  const [{ count }, dispatch] = useStateValue();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        onClick={() =>
          dispatch({
            type: 'INCREMENT'
          })
        }
      >
        Increment
      </button>
    </div>
  );
};

export default Post;
