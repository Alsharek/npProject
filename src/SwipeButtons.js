import { IconButton } from '@material-ui/core'
import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/Star'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

function SwipeButtons() {
    return (
      <div className='swipeButtons'>
        <div class="custom-shape-divider-bottom-1643901850">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
        <IconButton className='swipeButtons__repeat'>
          <ReplayIcon fontSize='small' />
        </IconButton>
        <IconButton className='swipeButtons__left'>
          <CloseIcon fontSize='small' />
        </IconButton>
        <IconButton className='swipeButtons__star'>
          <StarIcon fontSize='small' />
        </IconButton>
        <IconButton className='swipeButtons__right'>
          <FavoriteIcon fontSize='small' />
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
          <FlashOnIcon fontSize='small' />
        </IconButton>
      </div>
    )
}

export default SwipeButtons
