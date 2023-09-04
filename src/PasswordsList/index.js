import './index.css'
import {Component} from 'react'

import Passwords from '../Passwords'

class PasswordsList extends Component {
  state = {searchInput: '', togglePassword : false,  usersList: this.props.usersList }

  searchLists = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = (id) => {
    const {usersList} = this.state
    const filteredResult = usersList.filter(eachList => eachList.id !== id)
    console.log(filteredResult)
    this.setState({usersList : filteredResult})
  }
  
  changeCheckBox = () => {
    const {togglePassword} = this.state 
    this.setState(prevState => ({togglePassword : !prevState.togglePassword}))
  }
  render() {
    const {searchInput, togglePassword} = this.state
    //console.log(searchInput)
    
    
    const {usersList} = this.state
    const {id, website, userName, password} = usersList
    const searchResult = usersList.filter(eachList => {
    return eachList.website.toLowerCase().includes(searchInput.toLowerCase())
    })
    console.log(searchResult.length)
    //console.log(usersList.length)
    return (
      <div className='passwords-container'>
      
        <div className='passwords-count-container'>
          <p className='passwords-count-heading'>
            Your Passwords
            <span className='passwords-count'>{usersList.length}</span>
          </p>
          <div className='search-container'>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className='search-img'
            />
            <input
              type="search"
              onChange={this.searchLists}
              value={searchInput}
              placeholder='Search'
              className='search-input'
            />
          </div>
        </div>
        <hr className='hr-line'/>
        <div className='checkbox-container'>
          <input type="checkbox" id="showPassword" onClick={this.changeCheckBox}/>
          <label htmlFor="showPassword" className='checkbox-label'>Show Passwords</label>
        </div>
        {
          (usersList.length === 0 || searchResult.length === 0) && 
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png' alt='no passwords' className='no-password-img'/>
              <p className='no-passwords-text'> No Passwords</p>
            </div>
          
        }

        
        <ul className='ul-props'>
          {searchResult.map(eachList => (
            <Passwords eachList={eachList} key={eachList.id} togglePassword={togglePassword} onDelete={this.onDelete}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default PasswordsList
