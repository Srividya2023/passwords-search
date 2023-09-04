import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordsList from '../PasswordsList'

class PasswordManager extends Component {
  state = {usersList: [], website: '', userName: '', password: ''}

  addUsersDetails = event => {
    event.preventDefault()
    const {usersList, website, userName, password} = this.state
    usersList.push({id: uuidv4(), website, userName, password})
    this.setState({usersList})
    this.setState({website: '', userName: '', password: ''})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {usersList, website, userName, password} = this.state
    console.log(usersList)
    return (
      <div className="bg-container">
        
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className='password-container'>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="password-manager-img"
              />
            </div>
            <form onSubmit={this.addUsersDetails} className='form-container'>
              <h1 className='password-heading'>Add New Password</h1>
              <div className='input-container'>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <br />
              <br />
              <div className='input-container'>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={userName}
                  onChange={this.onChangeUserName}
                />
              </div>
              <br />
              <br />
              <div className='input-container'>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-img"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <br />
              <br />
              <div className='add-btn-container'>
                <button type="submit" className='add-btn' >Add</button>
              </div>
            </form>
          </div>
        
        <PasswordsList usersList={usersList} />
      </div>
    )
  }
}

export default PasswordManager
