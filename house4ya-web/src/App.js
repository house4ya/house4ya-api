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
import detailHouse from './components/detailHouse';
import DeleteProperty from './components/DeleteProperty';
import EditHouse from './components/EditHouse';
import Favourites from './components/Favourites';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route exact path='/home' component={ Home } />
      <Route path='/signin' component={ Login } />
      <Route  path='/signup' component={ Register } />
      <Route path='/profile' component={ Profile } />
      <Route path='/upload_house' component={ HouseForm } />
      <Route path='/properties' component={ Properties } />
      <Route path='/house' component={ detailHouse } />
      <Route path='/home/:id' component={ detailHouse } />
      <Route path='/property/:house/:owner' component={ DeleteProperty } />
      <Route path='/edit_property/:house/:owner' component={ EditHouse } />
      <Route path='/favourites' component={ Favourites } />
      <Route path='/edit_profile' component={EditProfile} />
      {/* <Redirect to='/home' /> */}
     </Switch>
      
       
        
    </div>
  );
}

export default App;
