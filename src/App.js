import React from 'react';
import logo from './assets/logo-endless.svg';
import MyComponent from './ajax.js';
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
      <main className="main-container">
        <section className="main-content--container">
          <h3> first line</h3>
          <h2> second line p1 </h2>
          <h2> second line p2 </h2>
          <p> final test </p>
          <button>Get Started</button>
        </section>
      </main>
      <footer className="how-it-works">
        <MyComponent/>
      </footer>
    </div>
  );
}
export default App;
