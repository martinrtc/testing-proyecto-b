import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material'



export default function CreateSchedule() {
    // const movies = [{name: 'Avatar', id: 1},{name: 'Gladiator', id: 2},{name: 'Toy Story', id: 3}]
    const theaters = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5', 'Sala 6', 'Sala 7', 'Sala 8']
    const schedules = ['Matine', 'Tanda', 'Noche']
    const [movies, setMovies] = useState();
    const [movie, setMovie] = useState();
    const [theater, setTheater] = useState();
    const [schedule, setSchedule] = useState();


    const handleMovie = (event) => {
        setMovie(event.target.value);
    };

    const handleTheater = (event) => {
        setTheater(event.target.value);
    };

    const handleSchedule = (event) => {
        setSchedule(event.target.value);
    };

    const createFunction = () => {
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
            console.log("DATA", data);
            setMovies(data);
          })
      }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography>Crear función</Typography>
            <TextField
                id="outlined-select-movie"
                select
                label="Película"
                value={movie}
                onChange={handleMovie}
                helperText="Eliga la película"
                size="small"
            >
                {movies != null ? 
                movies.map((option) => (
                    <MenuItem key={option.movie.id} value={option.movie.id}>
                        {option.movie.name}
                    </MenuItem>
                ))
                : (<div/>)}
            </TextField>
            <TextField
                id="outlined-select-theater"
                select
                label="Sala"
                value={theater}
                onChange={handleTheater}
                helperText="Eliga la sala"
                size="small"
            >
                {theaters.map((option) => (
                    <MenuItem key={option} value={theaters.indexOf(option)}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-select-schedule"
                select
                label="Horario"
                value={schedule}
                onChange={handleSchedule}
                helperText="Eliga un horario"
                size="small"
            >
                {schedules.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" onClick={() => createFunction()}>Crear función</Button>
        </Box>
    );
}