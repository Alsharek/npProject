import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'
import { Link, useHistory } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Wastedlogo from './Wastedlogo.png'

function Header({ backButton }) {
    
const history = useHistory()

  return (
    <div className='header'>
        
        <div class="custom-shape-divider-top-1643921469">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
    </div>
      
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
      )}

      <Link to='/'>
        <img
          className='header__logo'
          src={Wastedlogo}
          alt='Wasted'
          
        />
      </Link>
      

      <Link to='/chat'>
        <IconButton>
          <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
