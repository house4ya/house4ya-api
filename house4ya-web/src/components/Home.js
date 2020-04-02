import React, { Component } from 'react'
import HouseService from '../services/HouseService'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      houses: []
    }
  }

 fetchHouses = () => {
   HouseService.getHouses()
   .then( houses => this.setState({ houses: houses }))
 }

 componentDidMount() {
   this.fetchHouses()
 }

  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.state.houses.map(
          house =>
          <div>
            <h3>{house.address}</h3>
            <h3>{house.owner}</h3>
            <p>{house.description}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Home