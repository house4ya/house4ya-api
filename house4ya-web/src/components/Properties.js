import React, { Component } from 'react'
import HouseService from '../services/HouseService'
//import { Link } from 'react-router-dom'

class Properties extends Component {
  constructor(props){
    super(props)

    this.state = {
      properties: []
    }
  
  }

  fetchProperties = () => {
    HouseService.getProperties()
    .then(
      properties => this.setState({ properties: properties.houses })
    )
  }

  componentDidMount() {
    this.fetchProperties()
  }

  render() {
    return(
      <div>
        <h1> Your properties</h1>
        {this.state.properties.map(property => 
        <div>
          <hr></hr>
          <h3>{property.address}</h3>
        </div>
          
          )}
      </div>
      
    )
  }
}

export default Properties