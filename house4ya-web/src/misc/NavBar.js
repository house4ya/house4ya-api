import React from 'react' 
import house4yaLogo from '../imgs/house4ya.logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to='/home' >
    <img src={house4yaLogo} width="60"  height="10" alt="house4ya logo" />

    </Link>
    

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="todo">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="todo">
        <input type="text" placeholder=" search..."></input>
      </a>

      

      <a className="navbar-item" href="todo">
        <input type="number" placeholder="min"></input>
      </a>
      <a className="navbar-item" href="todo">
        <input type="number" placeholder="max"></input>
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="todo">
          Type
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" href="todo">
            House
          </a>
          <a className="navbar-item" href="todo">
            Flat
          </a>
          <a className="navbar-item" href="todo">
            Appartment
          </a>
          {/* </div> */}
          {/* <hr className="navbar-divider"> */}
          
        </div>
      </div>

      <div className="navbar-item  is-hoverable">
        <a className="navbar-link" href="todo">
          Filters
        </a>

        
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to='/signup' className="button is-primary" href="todo">
            <strong>Sign up</strong>
          </Link>
          <Link to='/signin' className="button is-light" href="todo">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
