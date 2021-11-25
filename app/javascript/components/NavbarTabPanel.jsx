import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

function NavbarTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'} >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

NavbarTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const muiClassStyles = makeStyles((theme) => ({
    nonSelected: {
        '& .MuiSvgIcon-root': {
            color: 'white',
        },
    },
    selected: {
        '& .MuiSvgIcon-root': {
            color: '#FF8000',
        },
    }
}));
export default function BasicTabs() {
    const classes = muiClassStyles();
    const [value, setValue] = useState(0);
    const [tabLabel, setTabLabel] = useState('En vivo')


    useEffect(() => {
        const labels = ['FUNCIONES', 'CREAR PELÍCULA', 'RESERVAR ASIENTO']
        setTabLabel(labels[value])
    }, [value])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%'}}>
                <Box sx={{ borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
                        TabIndicatorProps={{
                            style: {
                                height: "7px",
                                backgroundColor: "#1976d2"
                            }
                        }}>
                        <Tab label={<b className={value === 0 ? classes.selected : classes.nonSelected}>Funciones</b>} />
                        <Tab label={<b className={value === 1 ? classes.selected : classes.nonSelected}>Crear Pelicula</b>} />
                        <Tab label={<b className={value === 2 ? classes.selected : classes.nonSelected}>Reservar asiento</b>} />
                        <Tab disabled label={<b style={{ textTransform: 'none', color: 'white', fontSize: 20 }}>{tabLabel}</b>} />
                    </Tabs>
                </Box>
                    <NavbarTabPanel value={value} index={0}>
                        Funciones
                    </NavbarTabPanel>
                    <NavbarTabPanel value={value} index={1}>
                        Crear pelicula
                    </NavbarTabPanel>
                    <NavbarTabPanel value={value} index={2}>
                        Reservar asiento
                    </NavbarTabPanel>
                </Box>
        </div>
        );
}