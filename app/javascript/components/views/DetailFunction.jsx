import React from 'react'
import Reservation from './viewComponents/Reservation';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

class DetailFunction extends React.Component {
  render() {
    return (
      <div>
        <img height="300" width="500" alt="photo" src="https://as.com/meristation/imagenes/2021/01/25/noticias/1611576361_977797_1611576540_sumario_grande.jpg" />
        <Typography gutterBottom variant="h5" component="div" align="center">
          Reserva de asientos
        </Typography>
        <Reservation />
      </div>
    )
  }
}

export default DetailFunction