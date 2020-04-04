import React from 'react';
import './App.css';
import NavBar from './misc/NavBar';
// import Card from './components/Cards';
import Login from './components/login';
import Register from './components/Register';
import { Switch, Route, Redirect} from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import HouseForm from './components/HouseForm';
import Properties from './components/Properties';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route path='/home' component={ Home } />
      <Route path='/signin' component={ Login } />
      <Route  path='/signup' component={ Register } />
      <Route path='/profile' component={ Profile } />
      <Route path='/upload_house' component={ HouseForm } />
      <Route path='/properties' component={ Properties } />
      <Redirect to='/home' />
     </Switch>
      
       
        
    </div>
  );
}

export default App;
