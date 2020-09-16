import React, {Component} from 'react'
import UserService from '../services/UserService'

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile: {
        username: '',
        avatar: '',
        email: ''
      }
      
    }
  }

  // componentDidMount() {
  //   HouseService.getHouseDetail(this.props.match.params.house)
  //   .then(resHouse => this.setState({
  //     house: { ...this.state.house,
  //             address: resHouse.address,
  //             squareMetres: resHouse.squareMetres,
  //             description: resHouse.description,
  //             photos: resHouse.photos
  //     }
  //   }))
  // }

  componentDidMount() {
    UserService.getProfile()
    .then(resProfile => this.setState({
      profile: {...this.state.profile,
                username:resProfile.username,
                email:resProfile.email,
                avatar: resProfile.avatar
      }
    }))
  }

 

  handleChange = (event) => {
    const {name, value, files} = event.target
    this.setState({
      profile: {
        ...this.state.profile,
        [name]: files && files[0] ? files[0] : value
      }
    })
  }

  // handleChangeImg = (event) => {
  //   this.setState({
  //     profile:{
  //       avatar: event.target.files[0]
  //     }
      
  //   })
  // }

  handleFormSubmit = (event) => {
    event.preventDefault();
    UserService.editProfile(this.state.profile)

  }

  render() {
    return(
      <div>
            <h1>edit your profile</h1>
            <form onSubmit={this.handleFormSubmit}>
              <input name='email' placeholder="type your new email" value={this.state.profile.email} onChange={(e) => this.handleChange(e)} />
              <input name="username" placeholder="type your new username" value={this.state.profile.username} onChange={(e) => this.handleChange(e)} />
              <button type="submit">Update</button>
                <div>
                   <img src={this.state.profile.avatar} height='300' width='120' alt="profile"></img>

                 </div>
            </form>
            <input type='file' name='avatar'   onChange={(e) => this.handleChange(e)} />


      </div>
    )
  }
}

export default EditProfile
