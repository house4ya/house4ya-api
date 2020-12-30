import React, { Component } from 'react'
import AuthService from '../services/AuthService'

class Login extends  Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
      

    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    AuthService.login(this.state.user)
  }

  


  render(){
    return(
      <form onSubmit={this.handleFormSubmit} className="login-form">
        <div>
          <input type="email" name="email" placeholder="email" onChange={(e) => this.handleChange(e)} value={this.state.user.email} />
        </div>
        <div>
          <input type="password" name="password" placeholder="password"  onChange={(e) => this.handleChange(e) } value={this.state.user.password} />
        </div>
        <div>
          <button type="submit" >Sign in</button>
        </div>
      </form>
    )
  }
}

export default Login