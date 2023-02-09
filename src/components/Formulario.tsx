import React,{useState} from 'react'
import {Container,Card,Typography,CardContent,CardActions,Button,CardMedia,Box} from '@mui/material'

function Formulario() {
  const [archivo, setArchivo] = useState<null | File | undefined>(null);


  return (
    <Container 
      maxWidth='xs'>
      <Card variant="elevation">
        <CardContent>
          <Typography
            variant='h5'>
            Identificar señal de tránsito
          </Typography>
        </CardContent>
          {
            !archivo ? null: <CardMedia
              component="img"
              height="194"
              image={URL.createObjectURL(archivo)}
              alt="Imagen"
            />
          }
        
        <CardActions>
            <Button component="label">
              Escojer imagen
              <input hidden accept="image/*" type="file" onChange={(x:React.ChangeEvent<HTMLInputElement>)=>{
                setArchivo(x.target.files?.item(0));
              }}/>
            </Button>
          <Button 
            onClick={()=> alert('Estamos en desarrollo')}
            size="small" 
            color="primary">
            Enviar
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Formulario