import React, { useEffect, useState } from 'react';
import Reservation from './viewComponents/Reservation'
import { Box } from '@mui/material'


export default function Functions() {
    const [reservationBoolean, setReservationBoolean] = useState(1)
    return (       
        <Box sx={{ flexGrow: 1 }}>
         {!!reservationBoolean && <Reservation />}
        </Box>
    );
}