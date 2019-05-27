import React from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';

import { StateProvider } from './state';

function App() {
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
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
