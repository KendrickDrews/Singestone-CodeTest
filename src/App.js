import React from 'react';
import logo from './assets/logo-endless.svg';
import APIRequest from './apiRequest.js';
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
          <div className="section-column">
            <h3 className="shadowed">New Games & Accessories</h3>
            <h2 className="shadowed">Monthly packages.</h2>
            <h2 className="shadowed">Excitement delivered daily.</h2>
            <p className="shadowed">What’s the best way to shop for the latest video games and peripherals? How about never shopping at all? You’ll get new stuff on your doorstep — every month.</p>
            <button>GET STARTED</button>
          </div>
        </section>
      </main>
      <section className="how-it-works">        
        <p className="section-title">How It Works</p>        
        <APIRequest/>
      </section>
    </div>
  );
}
export default App;
