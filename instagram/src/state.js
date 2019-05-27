import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

const initialState = {
  user: {
    username: 'therock',
    profilePic:
      'https://scontent-ort2-1.cdninstagram.com/vp/b8591b1301d381a7e8baddb2fca31af0/5D9D0AFC/t51.2885-19/11850309_1674349799447611_206178162_a.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com'
  },
  posts: [
    {
      id: 1,
      user: 'neymarjr',
      profilePic:
        'https://scontent-ort2-1.cdninstagram.com/vp/e9fc79caa7478268b7994c583382eab5/5D917FE2/t51.2885-19/s320x320/57291239_2820251434866018_5427607432459190272_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com',
      likes: 1108061,
      description: '"Spirit of the Brave"',
      imageUrl:
        'https://scontent-ort2-1.cdninstagram.com/vp/4cc5de878ed6c769d205f93adf84e19e/5D966EA1/t51.2885-15/e35/p320x320/59695637_401291657151771_1836917351015504372_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com',
      comments: [
        {
          user: 'talitadonega',
          comment: 'Que foto!'
        },
        {
          user: 'guiunesgb',
          comment: 'Oss yes'
        }
      ]
    }
  ],
  selectedPost: null
};

const reducer = (state, action) => {
  switch (action.type) {
    // sample case
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };

    case 'ADD_COMMENT':
      const posts = state.posts.map(post => {
        console.log('POST ID: ', post.id);
        console.log('ACTION ID: ', action.postId);
        if (post.id == action.postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                user: state.user.username,
                comment: action.commentText
              }
            ]
          };
        } else {
          return post;
        }
      });

      return {
        ...state,
        posts
      };

    default:
      return state;
  }
};

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
