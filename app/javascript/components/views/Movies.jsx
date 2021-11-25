import React, { useEffect, useState } from 'react';
import CreateMovie from './viewComponents/CreateMovie'
import { Box } from '@mui/material'


export default function Movies() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CreateMovie />
        </Box>
    );
}