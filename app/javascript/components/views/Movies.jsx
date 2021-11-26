import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'
import CreateMovie from './viewComponents/CreateMovie'
import CreateSchedule from './viewComponents/CreateSchedule';



export default function Movies() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CreateMovie />
            <CreateSchedule />
        </Box>
    );
}