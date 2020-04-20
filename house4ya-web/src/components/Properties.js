import React, { Component } from 'react'
import HouseService from '../services/HouseService'
import { Link } from 'react-router-dom'

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
        <Link to={`/property/${property.id}/${property.owner}`}>
          <hr></hr>
          <h3>{property.address}</h3>
          <p>{property.description}</p>
         <button><Link to={`/edit_property/${property.id}/${property.owner}`}>Edit property</Link></button> 
          <button>delete</button>
        </Link>
          
          )}
      </div>
      
    )
  }
}

export default Properties