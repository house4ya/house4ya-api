import React, { Component } from 'react'
import UserService from '../services/UserService'



class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        username: '',
        avatar: ''
      }
    }
  }

  componentDidMount() {
    UserService.getProfile()
    .then(
      (user) => this.setState({ user: {...this.state.user, ...user }}),
      (error) => console.error(error)
    )
  }

  render() {
    return(
      <div>
        <h1>Your profile</h1>
        <h1>{this.state.user.username}</h1>
        <h1>{this.state.user.email}</h1>
        <h1>{this.state.user.avatar}</h1>
        

      </div>
    )
  }
}

export default  Profile

