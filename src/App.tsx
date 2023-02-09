import React from 'react'
import {Button,Container,Grid} from '@mui/material'

import NavBar from './components/NavBar'
import Formulario from './components/Formulario'

function App() {
  return (
    <Container
      disableGutters
      maxWidth='xl'
      >
      <NavBar/>
      <Grid
        container
        sx={{
          marginTop:5
        }}  
      >
        <Formulario/>                    
      </Grid>
    </Container>
  )
}

export default App