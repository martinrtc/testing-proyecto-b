import React, { useEffect, useState } from 'react';
import Reservation from './viewComponents/Reservation';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function DetailFunction() {
  const [name, setName] = useState()
  const [mail, setMail] = useState()
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMail = (event) => {
    setMail(event.target.value);
  };

  const createReservation = () => {
      console.log('name', name)
      console.log('mail', mail)
      const jsonValue = {hour: schedule, movie_id: movie, theater_id: theater}
      const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonValue),
        };
      fetch('/create_schedule', requestOptions);
  }
    return (
      <div>
        <Typography gutterBottom variant="h4" component="div" align="center">
          Información para Reservar
        </Typography>
        <TextField
            required
            id="outlined-name"
            label="Nombre"
            value={name}
            onChange={handleName}
            helperText="Eliga el nombre de quien hace la reserva"
            size="small"
        />
        <TextField
            required
            id="outlined-mail"
            label="Mail"
            value={mail}
            onChange={handleMail}
            helperText="Mail de la reserva"
            size="small"
        />
        <Button variant="contained" onClick={() => createReservation()}>Crear función</Button>
        <Typography gutterBottom variant="h4" component="div" align="center">
          Reserva de asientos
        </Typography>
        <div className="imgReservas">
          <img height="280" width="500" alt="photo" src="https://as.com/meristation/imagenes/2021/01/25/noticias/1611576361_977797_1611576540_sumario_grande.jpg" />
        </div>
        <Reservation />
      </div>
    )
};