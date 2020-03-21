import React, { Component } from 'react'

class Login extends  Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
      </div>
    )
  }
}

export default Login