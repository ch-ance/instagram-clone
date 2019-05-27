import React from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';

import { StateProvider } from './state';

function App() {
  const initialState = {
    posts: [
      {
        user: 'neymarjr',
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
