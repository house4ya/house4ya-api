import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card  extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render() {

  
    return(
      <Link class="card" to={`/home/${this.props.house.id}`}>
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      <p>{this.props.house.description}</p> <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</Link>
    )
  
}
}

export default Card

