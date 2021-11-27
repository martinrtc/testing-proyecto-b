import React, { useEffect, useState } from 'react';
import Reservation from './viewComponents/Reservation'
import MovieCard from './viewComponents/Cards';
import { Box } from '@mui/material'


export default function Functions() {
    const [reservationBoolean, setReservationBoolean] = useState(1)
    return (
        <di>
            <h1>Aqui van las funciones</h1>
            <MovieCard/>
        </di>
        // <Box sx={{ flexGrow: 1 }}>
        //  {!!reservationBoolean && <Reservation />}
        // </Box>
    );
}