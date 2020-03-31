import React, { Profiler } from 'react';
import './App.css';
import NavBar from './misc/NavBar';
// import Card from './components/Cards';
import Login from './components/login';
import Register from './components/Register';
import { Switch, Route} from 'react-router-dom'
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route path='/home'  />
      <Route path='/signin' component={ Login } />
      <Route  path='/signup' component={ Register } />
      <Route path='/profile' component={ Profile } />
     </Switch>
      
       
        
    </div>
  );
}

export default App;
