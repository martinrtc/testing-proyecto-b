import React from 'react'
import Reservation from './viewComponents/Reservation';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

class DetailFunction extends React.Component {
  render() {
    return (
      <div>
        <Typography gutterBottom variant="h4" component="div" align="center">
          Reserva de asientos
        </Typography>
        <div className="imgReservas">
          <img height="280" width="500" alt="photo" src="https://as.com/meristation/imagenes/2021/01/25/noticias/1611576361_977797_1611576540_sumario_grande.jpg" />
        </div>
        <Reservation />
      </div>
    )
  }
}

export default DetailFunction