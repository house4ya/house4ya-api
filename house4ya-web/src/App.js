import React from 'react';
import './App.css';
import NavBar from './misc/NavBar';
// import Card from './components/Cards';
import Login from './components/login';
import Register from './components/Register';
import { Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route path='/home'  />
      <Route path='/signin' component={ Login } />
      <Route  path='/signup' component={ Register } />
     </Switch>
      
       
        
    </div>
  );
}

export default App;
