import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPinOutlined';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ListIcon from '@material-ui/icons/List';
import DetailsIcon from '@material-ui/icons/Details';
import SpeedIcon from '@material-ui/icons/Speed';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '../components/employees/List'
import Details from '../components/employees/Details';
import Performance from '../components/employees/Performance';
import { Grid, ListItemText, Paper, Box } from '@material-ui/core';

function TabPanel(props) {
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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const User = () => <Grid container spacing={3}>

    <Grid item sm={4}>
        <img src='/logo192.png' width='100' />
    </Grid>
    <Grid item sm={4}>
        <ListItemText primary='Name' secondary='Asadullah' />
        <ListItemText primary='Current Role' secondary='Engineer' />
        <ListItemText primary='Email' secondary='Email@gmail.com' />
    </Grid>
    <Grid item sm={4}>
        <ListItemText primary='Address' secondary='Address' />
        <ListItemText primary='Date' secondary=' 12.12.20' />
        <ListItemText primary='Skills' secondary='Skills' />
    </Grid>
</Grid>
export default function Employees() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="inherit"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<ListIcon />} label="List" />
                    <Tab icon={<DetailsIcon />} label="Details" />
                    <Tab icon={<SpeedIcon />} label="Performance" />
                    <Tab icon={<ExitToAppIcon />} label="Leave" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <List />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <User />

                <Details />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <User />

                <Performance />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <User />

                <Performance />
            </TabPanel>
        </div>
    );
}
