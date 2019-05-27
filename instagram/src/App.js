import React from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';

import { StateProvider } from './state';

function App() {
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
    ]
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
        let index = 0;
        const selectedPost = state.posts.filter((eachPost, i) => {
          index = i;
          return eachPost.id === action.postId;
        });

        const updatedPost = selectedPost.comments.push({
          user: state.user.username,
          comment: action.commentText
        });

        const posts = state.posts;

        posts[index] = updatedPost;

        return {
          ...state,
          posts
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className='App'>
        <header className='App-header'>
          <Header />
        </header>
        <main>
          <HomeScreen />
        </main>
      </div>
    </StateProvider>
  );
}

export default App;
