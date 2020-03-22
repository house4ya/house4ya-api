import React, { Component } from 'react'

class Register extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <div>
          <input type="text" placeholder="username" />
        </div>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>

        <button>Create</button>
      </div>
    )
  }
}

export default Register