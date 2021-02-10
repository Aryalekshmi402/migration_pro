import React from 'react'
import { Container,AppBar,Toolbar,Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar >
          <Typography color="inherit" variant="footer">
            © 2021 Carepact
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
