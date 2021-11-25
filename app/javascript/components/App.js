import React from 'react'
import { ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import themeDCCinema  from '../styles/theme'
import NavbarTabPanel from './NavbarTabPanel'

const useStyles = makeStyles(() => ({
  containerApp: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={themeDCCinema}>
      <div className={classes.containerApp}>
        <NavbarTabPanel />
      </div>
    </ThemeProvider>
  );
}

export default App;
