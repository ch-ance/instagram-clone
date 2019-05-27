import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <HomeScreen />
      </main>
    </div>
  );
}

function Header() {
  const style = {
    width: "100vw",
    height: "6.8vh",
    background: "white"
  };
  return (
    <div style={style}>
      <h1>Instagram</h1>
    </div>
  );
}

export default App;
