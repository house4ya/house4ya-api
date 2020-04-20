import React, { Component } from 'react'
import HouseService from '../services/HouseService'

class EditHouse extends Component {
  constructor(props){
    super(props)
    this.state = {
      house : {
        address: '',
        squareMetres: '',
        description: '',
        photos : ''
        
      }
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    HouseService.editHouse(this.props.match.params.owner, this.props.match.params.house, this.state.house)
  }

  handleChange = (event) => {
    const {name, value, files} = event.target
    this.setState({
      house: {
        ...this.state.house,
      [name]: files && files[0] ? files[0] : value
      }
      
    })
  
  }

  componentDidMount() {
    HouseService.getHouseDetail(this.props.match.params.house)
    .then(resHouse => this.setState({
      house: { ...this.state.house,
              address: resHouse.address,
              squareMetres: resHouse.squareMetres,
              description: resHouse.description,
              photos: resHouse.photos
      }
    }))
  }

  render() {
    return(
      <div>
        <h1>{this.props.match.params.house}</h1>
        <form onSubmit={this.handleFormSubmit}>
    <input name='address' type='text' id='form-house' placeholder='adress' onChange={(e) => this.handleChange(e)} value={this.state.house.address} ></input>
          <input name='squareMetres' type='number' placeholder='size' onChange={(e) => this.handleChange(e)} ></input>
          <input name='description' type='textbox' placeholder='write a description'onChange={(e) => this.handleChange(e)}  ></input>
          <input name='interested' type='text' value={this.state.house.interested} onChange={(e) => this.handleChange(e)} />
          <button type='submit'>edit</button>
        </form>
        <input name='photos' type='file' form='form-house' placeholder='search image' onChange={(e) => this.handleChange(e)} ></input>
      </div>
    )
  }
}

export default EditHouse