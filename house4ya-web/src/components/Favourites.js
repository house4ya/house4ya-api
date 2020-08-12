import React, { Component } from 'react'
import UserService from '../services/UserService'
import { Link } from 'react-router-dom'

class Favourites extends Component {
  constructor(props){
    super(props)
    this.state = {
      favourites: [],
      deletingTarget: ''
    }
  }

  fetchFavourites = () => {
    UserService.listFavs()
    .then(favourites => 
      this.setState({
         favourites: favourites
      })
    )
  }

  componentDidMount() {
    this.fetchFavourites()
  }

  
  
  

  render() {
    return(
      <div>
        <h1>this is favs</h1>
        {this.state.favourites.map(fav =>
          <Link to={`/home/${fav.id}`}> 
            <h3>{fav.address}</h3>
          </Link>
        )}
      </div>
      

    )
  }
}

export default Favourites