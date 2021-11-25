import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Select } from '@mui/material'



export default function CreateMovie() {
    const [movieName, setMovieName] = useState('')

    const handleChange = (event) => {
        setMovieName(event.target.value);
        console.log(movieName)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography>Crear película</Typography>
            <TextField
                required
                id="outlined-required"
                label="Nombre"
                value={movieName}
                onChange={handleChange}
                helperText="Eliga el nombre de la película"
                size="small"
            />
        </Box>
    );
}