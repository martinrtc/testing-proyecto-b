import React, { useEffect, useState } from 'react';
import { Box, Button, ListItem, List, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const muiClassStyles = makeStyles(() => ({
    greenButton: {
        '& .MuiButton-root': {
            backgroundColor: 'green',
        }
    },
    redButton: {
        '& .MuiButton-root': {
            backgroundColor: 'red',
        }
    }
}));

const handleReservation = (rowIndex, seatIndex) => {
    console.log('rowIndex', rowIndex)
    console.log('seatIndex', seatIndex)
}

export default function Reservation() {
    const list = [[1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    return (
        <Box sx={{ flexGrow: 1 }}>
            {list.map((row, rowIndex) => 
                <List>
                    <ListItem>
                    {row.map((seat, seatIndex) =>
                        seat === 0 ? <Button onClick={() => handleReservation(rowIndex, seatIndex)} variant="contained"></Button> : <Button variant="contained" disabled></Button>
                    )}
                    </ListItem>
                </List>
            )}
        </Box>
    );
}