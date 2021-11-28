import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material'



export default function CreateSchedule() {
    const movies = [{name: 'Avatar', id: 1},{name: 'Gladiator', id: 2},{name: 'Toy Story', id: 3}]
    const theaters = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5', 'Sala 6', 'Sala 7', 'Sala 8']
    const schedules = ['matine', 'tanda', 'noche']
    const [movie, setMovie] = useState()
    const [theater, setTheater] = useState()
    const [schedule, setSchedule] = useState()
    const [name, setName] = useState()
    const [mail, setMail] = useState()


    const handleMovie = (event) => {
        setMovie(event.target.value);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleMail = (event) => {
        setMail(event.target.value);
    };

    const handleTheater = (event) => {
        setTheater(event.target.value);
    };

    const handleSchedule = (event) => {
        setSchedule(event.target.value);
    };

    const createFunction = () => {
        console.log('movie', movie)
        console.log('theater', theater)
        console.log('schedule', schedule)
        console.log('name', name)
        console.log('mail', mail)
    }
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
                {movies.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
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
                    <MenuItem key={option} value={option}>
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
            <Button variant="contained" onClick={() => createFunction()}>Crear función</Button>
        </Box>
    );
}