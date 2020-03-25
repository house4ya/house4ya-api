import React, { Component } from 'react'
import AuthService from '../services/AuthService'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        username: '',
        password: ''
      }
    }
  }

  handleChange = (event) => {
    let {name, value } = event.target
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
      
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    AuthService.register(this.state.user)
  }



  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <input type="text" name="username" placeholder="username" value={this.state.user.username} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          <input type="email" name="email" placeholder="email" value={this.state.user.email} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" value={this.state.user.password} onChange={(e) => this.handleChange(e) } />
        </div>

        <button type="submit">Create</button>
      </form>
    )
  }
}

export default Register