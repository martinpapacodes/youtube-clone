import React from 'react'
import styles from '../styles/Header.module.css'

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <IconButton>
          <MenuIcon className={styles.header__leftMenu} />
        </IconButton>
        <IconButton>
          <YouTubeIcon className={styles.header__leftYoutube}/>
        </IconButton>
        <h4>YouTube</h4>
      </div>  

      <div className={styles.header__middle}>
        <input type="text" placeholder='Search'/>
        <div>
          <SearchIcon className={styles.header__middleSearch} />
        </div>
       
          <IconButton>
            <MicIcon className={styles.header__middleMic} />
          </IconButton>
   
      </div>

      <div className={styles.header__right}>
        <IconButton>
          <AppsIcon className={styles.whitesmoke}/>
        </IconButton>
        <IconButton >
          <MoreVertIcon className={styles.whitesmoke} />
        </IconButton>
        <div className={styles.header__rightSignin}>
          <AccountCircleOutlinedIcon className={styles.header_rightSigninAccount} />
          <a>SIGN IN</a>
        </div>

      </div>
    
    
    </header>
  )
}

export default Header