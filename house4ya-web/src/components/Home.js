import React, { Component } from 'react'
import HouseService from '../services/HouseService'
import Card from './Cards'
import SearchBox from './searchBox'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      houses: [],
      address: null
    }
  }

  
  handleChange = (value) => {
    //let {name, value } = event.target
    this.setState({ 
      
      address: value
      
       })
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
        <div>
    <h1>{this.state.address}</h1>
          <SearchBox onChange={e => this.handleChange(e)}/>
        </div>
        
        {  
        this.state.houses.filter(casa => casa.LaCity[0].long_name === this.state.address || casa.LaCity[1].long_name === this.state.address )  //here goes long name of result suggestions
        .map(  /*here goes a fiter with the city*/ 
        house =>   
        <Card house={house} key={house.id} /> 
        
      )
      
      } 
      </div>
      
    )
  }
}

export default Home