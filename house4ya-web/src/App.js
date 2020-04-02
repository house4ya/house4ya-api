import React from 'react';
import './App.css';
import NavBar from './misc/NavBar';
// import Card from './components/Cards';
import Login from './components/login';
import Register from './components/Register';
import { Switch, Route} from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route path='/home' component={ Home } />
      <Route path='/signin' component={ Login } />
      <Route  path='/signup' component={ Register } />
      <Route path='/profile' component={ Profile } />
     </Switch>
      
       
        
    </div>
  );
}

export default App;
