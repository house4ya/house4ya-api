import React, { Component } from 'react'
import HouseService from '../services/HouseService'
import UserService from '../services/UserService'
import WrappedMap from './MapRender'

class detailHouse extends Component {
  
    
    state = {
      house: ''
    }

    fetchHouse = () => {
      HouseService.getHouseDetail(this.props.match.params.id)
      .then(ResHouse => {
        this.setState({ house: ResHouse })
      })
    }

    componentDidMount() {
      this.fetchHouse()
    }

    handleFavourite = () => {
      UserService.addFavs(this.props.match.params.id)
    }

    deleteFav = () => {
      UserService.deleteFav(this.props.match.params.id)
      
    }
    

  

  render() {
    return (
      <div>
        detailed house here
        <button onClick={this.handleFavourite} >add favs</button>
        <p>{this.props.match.params.id}</p>
        <h3>{this.state.house.address}</h3>
        <p>{this.state.house.description}</p>
        <button onClick={this.deleteFav}> delete favourite</button>
        <WrappedMap lat={this.state.house.latitude} lng={this.state.house.longitude}></WrappedMap>
        
        

      </div>
    )
  }
}

export default detailHouse