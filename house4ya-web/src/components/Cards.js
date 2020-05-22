import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService'

class Card  extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  // handleAddFavs = () => {
  //   UserService.addFavs(this.props.house.id)
    
  // }
  

  render() {

  
    return(
      <Link className="card" to={`/home/${this.props.house.id}`} key={this.props.house.id}>
        <h1>{this.props.house.id}</h1>
        {/* <button onClick={this.handleAddFavs()} >add favs</button> */}
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>
    {/* <div>
      {this.props.house.photos.map(photo => 
        <h1>{photo[3]}</h1>
        )}
    </div> */}

    <div className="content">
      <p>{this.props.house.description}</p> 
      
      <br/>
      
    </div>
  </div>
</Link>
    )
  
}
}

export default Card

