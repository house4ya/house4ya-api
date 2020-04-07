import React, { Component } from 'react'
import HouseService from '../services/HouseService'

class detailHouse extends Component {
  
    
    state = {
      house: null
    }

    fetchHouse = () => {
      HouseService.getHouseDetail(this.props.match.params.id)
      .then(Reshouse => {
        this.setState({ house: Reshouse})
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
        

      </div>
    )
  }
}

export default detailHouse