import React, { Component } from 'react'
import HouseService from '../services/HouseService'

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
  

  render() {
    return (
      <div>
        detailed house here
        <p>{this.props.match.params.id}</p>
        <h3>{this.state.house.address}</h3>
        
        

      </div>
    )
  }
}

export default detailHouse