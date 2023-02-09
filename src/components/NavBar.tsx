import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material'

function NavBar() {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h6'>
          Prototipo IA
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar