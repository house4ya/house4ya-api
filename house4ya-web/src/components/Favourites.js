import React, { Component } from 'react'
import UserService from '../services/UserService'

class Favourites extends Component {
  constructor(props){
    super(props)
    this.state = {
      favourites: ''
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
      <h1>this is favs</h1>
      
    )
  }
}

export default Favourites