import React, { useEffect, useState } from 'react';
import MovieCard from './viewComponents/Cards';
import functions from '../../styles/style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Typography, TextField } from '@mui/material';
import TextReservas from '../../styles/style';

export default function Reservations() {
    const [mail, setMail] = useState();

    const handleMail = (event) => {
        setMail(event.target.value);
    };

    const createMovie = () => {
        const jsonValue = {user_email : mail}
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonValue),
          };
        fetch('/reservations/show', requestOptions)
          .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("===========>", data);
            setMovies(data);
          })
    };
    
    return (
        <div align="center">
            <h2>Ingrese su correo para visualizar sus reservas</h2>
            <div className="TextReservas">
                <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                        <TextField
                            required
                            id="outlined-mail"
                            label="Mail"
                            value={mail}
                            onChange={handleMail}
                            helperText="Mail de la reserva"
                            size="small"
                        />
                    </CardContent>
                </Card>
            <Button variant="contained" type="submit" onClick={() => createMovie()}>Crear película</Button>
            </div>
            {/* {movies != null ? 
                movies.map((movie) => (
                    <div className="cardStyle">
                      <MovieCard id={movie.movie.id} url={movie.movie.url} name={movie.movie.name}/>
                    </div>
                    ))
                    : (<div/>)} */}
        </div>
        // {movie.movie.name}
        // <Box sx={{ flexGrow: 1 }}>
        //  {!!reservationBoolean && <Reservation />}
        // </Box>
    );
}