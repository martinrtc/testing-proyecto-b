import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material'

export default function CreateMovie() {
    const [movieName, setMovieName] = useState('')
    const [movieImage, setMovieImage] = useState('')

    const handleMovieName = (event) => {
        setMovieName(event.target.value);
    };

    const handleMovieImage = (event) => {
        setMovieImage(event.target.value);
    };

    const createMovie = () => {
        console.log('movie name', movieName)
        console.log('movie url', movieImage)
        const jsonValue = {name : movieName}
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonValue),
          };
        fetch("/create_movie", requestOptions);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography>Crear película</Typography>
            <TextField
                required
                id="outlined-required"
                label="Nombre"
                value={movieName}
                onChange={handleMovieName}
                helperText="Eliga el nombre de la película"
                size="small"
            />
            <TextField
                required
                id="outlined-required"
                label="Url imagen"
                value={movieImage}
                onChange={handleMovieImage}
                helperText="Url de la imagen"
                size="small"
            />
            <Button variant="contained" type="submit" onClick={() => createMovie()}>Crear película</Button>
        </Box>
    );
}