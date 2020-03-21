import React from 'react';
import './App.css';
import NavBar from './misc/NavBar';
import Card from './components/Cards';
import Login from './components/login';

function App() {
  return (
    <div className="App">
        <div>
          <NavBar />
          <Card />
          <Login />
        </div>
        
    </div>
  );
}

export default App;
