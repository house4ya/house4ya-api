import React, { Component} from 'react'
import HouseService from '../services/HouseService'

class DeleteProperty extends Component {
  state = {
    checked : false,
    deleted: false
  }

  

  deleteHouse = () => {
    HouseService.deleteHouse(this.props.match.params.owner, this.props.match.params.house)
    .then(this.setState({ deleted: true }))
    
  }

  

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.deleteHouse()

  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked})
  }




  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <h1>params id house => {this.props.match.params.house}</h1>
        <h1>params id owner => {this.props.match.params.owner}</h1>
        <p>You're about to delete this property. Are you sure?</p>
        <input type='checkbox' defaultChecked={this.state.checked} onChange={this.handleCheckbox} />
        <button type='submit'>Delete</button>
      </form>
    )
  }
}

export default DeleteProperty