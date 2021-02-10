import React from 'react'
import { AppBar,Toolbar,MenuIcon,IconButton,Typography } from '@material-ui/core'


const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h5" color="inherit">
          Carepact
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
