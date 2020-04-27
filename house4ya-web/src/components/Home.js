import React, { Component } from 'react'
import HouseService from '../services/HouseService'
import Card from './Cards'

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
        {this.state.houses.map(
        house =>
        <Card house={house} key={house.id}/>
      )}
      </div>
      
      
      // <div>
      //   <h1>Home</h1>
      //   {this.state.houses.map(
      //     house =>
      //     <div>
      //       <hr></hr>
      //       <h3>{house.address}</h3>
      //       <h3>{house.owner}</h3>
      //       <p>{house.description}</p>
            
            
      //     </div>
      //   )}
      // </div>
    )
  }
}

export default Home