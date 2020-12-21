import React from 'react'
import popcorn from './popcorn.svg'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <AppBar className={styles.Header} position={'sticky'}>
      <Link to="/">
        <Toolbar>
          <img alt={'Киновтопку'} src={popcorn} height={40} />
          <Typography variant="h5" color={'secondary'}>
            Киновтопку
          </Typography>
        </Toolbar>
      </Link>
    </AppBar>
  )
}

export default Header
