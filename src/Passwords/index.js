import './index.css'
import {Component} from 'react'
class  Passwords extends Component{
  onClickDelete = () => {
    const {onDelete, eachList} = this.props
    
    const {id} = eachList
    onDelete(id)
  }
  myStyles = () =>{
    const bgColorsList = ['#7683cb',  '#f59e0b' , '#10b981' , '#f97316', '#14b8a6', '#b91c1c', '#0ea5e9', '#64748b']
    const bgColors = Math.floor(Math.random() * bgColorsList.length)
    console.log(bgColors)
    const backgroundColor = bgColorsList[bgColors]
    return {
      backgroundColor: backgroundColor,
      padding: '10px 20px 10px 20px',
      borderRadius:'50px',
      color : '#ffffff', 
      margin: '10px',
      width:'20px',
      height: '40px'
      }
    }
  render(){
    const {eachList, togglePassword} = this.props
    
    const {id, website, userName, password} = eachList
    console.log(id, website, userName, password)
    
    return(
      <li className='each-list-props'>
        <div style={this.myStyles()}>
          <p>{userName[0]}</p>
        </div>
        <div>
          <p>{website}</p>
          <p>{userName}</p>
          {
            !togglePassword && 
            <img src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png' alt='stars' className='star-img'/>
          }
          { togglePassword && 
            <p>{password}</p>
          }
          
        </div>
        <button onClick={this.onClickDelete} className='delete-btn' type='button' >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className='delete-img'
          />
        </button>
      </li>
    
    )
  }
} 
  

export default Passwords
