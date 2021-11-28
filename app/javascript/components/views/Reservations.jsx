import React, { useEffect, useState } from 'react';
import MovieCard from './viewComponents/Cards';
import { Box } from '@mui/material';
import functions from '../../styles/style'


export default function Functions() {
    const [movies, setMovies] = useState();
    const [reservationBoolean, setReservationBoolean] = useState(1);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          };
        fetch("/movies", requestOptions)
          .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("===========>", data);
            setMovies(data);
          })
    }, []);
    
    return (
        <div align="center">
            <h1>Funciones</h1>
            {movies != null ? 
                movies.map((movie) => (
                    <div className="cardStyle">
                      <MovieCard id={movie.movie.id} url={movie.movie.url} name={movie.movie.name}/>
                    </div>
                    ))
                    : (<div/>)}
        </div>
        // {movie.movie.name}
        // <Box sx={{ flexGrow: 1 }}>
        //  {!!reservationBoolean && <Reservation />}
        // </Box>
    );
}