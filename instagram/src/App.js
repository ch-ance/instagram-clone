import React from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';

import { StateProvider } from './state';

function App() {
  return (
    <StateProvider>
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
