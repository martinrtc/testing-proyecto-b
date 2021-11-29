import React, { useEffect, useState } from 'react';
import { Box, Button, ListItem, List, Typography, TextField } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
// import DesktopDatePicker from "@material-ui/pickers";

export default function DetailFunction() {
  const { id } = useParams();
  const [Movie, setMovie] = useState();
  const [Schedule, setSchedule] = useState();
  const [list, setList] = useState(null);
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [date, setDate] = useState(new Date());
  const [row, setRow] = useState(null);
  const [seat, setSeat] = useState();
  const [listToSend, setlistToSend] = useState([-1,[]]);

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
    setSeat(seatIndex);
    setRow(rowIndex);
    if (listToSend[0] !== rowIndex) {
      listToSend[1].forEach(seat => {list[listToSend[0]][seat] = 0})
      listToSend[0] = rowIndex;
      listToSend[1] = [];
    }
    list[rowIndex][seatIndex] = 2;
    listToSend[1].push(seatIndex);
    setlistToSend(listToSend);
  };

  const createReservation = () => {
      // list[row][seat] = 1;
      const jsonValue = {date: date, row: listToSend[0],seats: listToSend[1],schedule_id: id, user_name: name, user_email: mail}
      const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonValue),
        };
      fetch('/create_reservation', requestOptions);
  };

  const updateSeats = () => {
    console.log(`/theaters/${id}?date=${date}`);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`/theaters/${id}?date=${date}`, requestOptions)
        .then((response) => {
          return response.json();
      })
      .then((data) => {
          console.log("Looog=>", data);
          setList(data);
          return data;
      })
  };

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(`/schedules/${id}`, requestOptions)
        .then((response) => {
          return response.json();
      })
      .then((data) => {
          console.log("Looog", data);
          setSchedule(data);
          return data;
      })
      .then((data) => {
          return fetch(`/movies/${data.movie_id}`, requestOptions)
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          console.log("LooogMovie", data);
          setMovie(data);
      });
      // console.log("calro---->", `/theaters/${id}?date=${date}`);
      // fetch(`/theaters/${id}?date=${date}`, requestOptions)
      //   .then((response) => {
      //     return response.json();
      // })
      // .then((data) => {
      //     console.log("Looog", data);
      //     setList(data);
      //     return data;
      // })
      if (seat != null) {
        list[row][seat] = 0;
      };
  }, [date]);

  return (
    <div>
      <Link to="/">Volver</Link>
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
        <Button variant="contained" onClick={() => updateSeats()}>Buscar Disponibles</Button>
      </div>
      <Typography gutterBottom variant="h4" component="div" align="center">
        Reserva de asientos
      </Typography>
      <div className="imgReservas">
      {Movie != null ? 
                (<img height="280" width="500" alt="photo" src={Movie.movie.url} />): (<div/>)}
      </div>
      <div className="seats">
        <Box sx={{ flexGrow: 1 }} align="center">
          {list !== null ? (
            list.map((row, rowIndex) => 
              <List>
                  <ListItem>
                  {row !== null ? (
                    row.map((seat, seatIndex) =>
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
                        )):(<div/>)
                      }
                  </ListItem>
              </List>
            )): (<div/>)
          }
        </Box>
      </div>
      <div className="Fields">
        <Button variant="contained" onClick={() => createReservation()} disabled={!((name != null) && (mail != null) && (date != null) && (seat != null))}>Crear Reserva</Button>
      </div>
    </div>
  )
};