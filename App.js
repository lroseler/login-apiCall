import React from 'react';
import './App.css';
import logo from '../src/logo.PNG';
import Body from '../src/login.js';

function App() {
 
      return (
        <div className="App">
           <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          </header>
        <Body />
    </div>
  );
}


export default App;
