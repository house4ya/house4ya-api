import React, { Component } from 'react'
import UserService from '../services/UserService'

class Favourites extends Component {
  constructor(props){
    super(props)
    this.state = {
      favourites: []
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
          <h3>{fav.address}</h3>
        )}
      </div>
      
      
    )
  }
}

export default Favourites