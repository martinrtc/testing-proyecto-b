import React, { useEffect, useState } from 'react';
import { Box, Button, ListItem, List, Typography, TextField } from '@mui/material';
// import DesktopDatePicker from "@material-ui/pickers";

export default function DetailFunction() {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));
  const [row, setRow] = useState();
  const [seat, setSeat] = useState();
  var list = [[1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMail = (event) => {
    setMail(event.target.value);
  };

  const handleReservation = (rowIndex, seatIndex) => {
    console.log('rowIndex', rowIndex);
    console.log('seatIndex', seatIndex);
    setRow(rowIndex);
    setSeat(seatIndex);
    list[rowIndex][seatIndex] = 2;
    console.log("Listaaaaaa", list);
  };

  const createReservation = () => {
      console.log('date', date);
      console.log('row', row);
      console.log('seats', seat);
      const jsonValue = {date: date, row: row,seats: seat, user_id: ""}
      const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonValue),
        };
      // fetch('/create_reservation', requestOptions);
  };

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // fetch("/movies", requestOptions)
      //   .then((response) => {
      //     return response.json();
      // })
      // .then((data) => {
      //     setMovies(data);
      //   })
      if (seat != null) {
        list[row][seat] = 0;
      };
  }, [seat]);

  return (
    <div>
      <Typography gutterBottom variant="h4" component="div" align="center">
        Información para Reservar
      </Typography>
      <div className="Fields">
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
        <TextField
          required
          id="outlined-date"
          label="Fecha"
          type="date"
          size="small"
          value={date}
          onChange={handleDate}
          defaultValue="2020-01-01"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Typography gutterBottom variant="h4" component="div" align="center">
        Reserva de asientos
      </Typography>
      <div className="imgReservas">
        <img height="280" width="500" alt="photo" src="https://as.com/meristation/imagenes/2021/01/25/noticias/1611576361_977797_1611576540_sumario_grande.jpg" />
      </div>
      <div className="seats">
        <Box sx={{ flexGrow: 1 }} align="center">
          {list.map((row, rowIndex) => 
            <List>
                <ListItem>
                {row.map((seat, seatIndex) =>
                  seat === 0 ? 
                    (<Button onClick={() => handleReservation(rowIndex, seatIndex)} variant="contained">{seatIndex + 1}</Button>) 
                    : 
                    (
                      seat === 1 ?
                    (<Button variant="contained" disabled>{seatIndex + 1}</Button>) 
                    :
                    (
                      <Button variant="contained" color='warning'>{seatIndex + 1}</Button>)
                    )
                    )}
                </ListItem>
            </List>
          )}
        </Box>
      </div>
      <div className="Fields">
        <Button variant="contained" onClick={() => createReservation()} disabled={!((name != null) && (mail != null) && (date != null) && (seat != null))}>Crear Reserva</Button>
      </div>
    </div>
  )
};