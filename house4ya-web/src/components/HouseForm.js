import React , { Component } from 'react'
import HouseService from '../services/HouseService'

class HouseForm extends Component {
  constructor(props){
    super(props)

    this.state = {
     
      address: '',
      description: '',
      squareMeters: '',
      owner: '',
      interested: []
     
        
      
      
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    HouseService.createHouses(this.state)
    //TODO
  }

  handleChange = (event) => {
    let {name, value } = event.target
    this.setState({ 
      
        ...this.state.house,
      [name]: value
      
       })
  }

  

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input name='address' type='text' placeholder='address' value={this.state.address} onChange={(e) => this.handleChange(e)} />
          <input name='description' type='text' placeholder='write a description here...' value={this.state.description} onChange={ (e) => this.handleChange(e) } />
          <input name='squareMeters' type='number' placeholder='size in square meters'  value={this.state.squareMeters} onChange={ (e) => this.handleChange(e) } />
          <input  type='submit' placeholder='upload property'/>

        </form>
      </div>
    )
  }
}

export default HouseForm