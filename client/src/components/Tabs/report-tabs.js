import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
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

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    mainTabs: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    TabColor: {
        color: '#bdbdbd',
        backgroundColor: '#fff',
        borderRadius: "10px",
    },
    indicator: {
        backgroundColor: '#5B009A',
        boxShadow: 'none',
        borderRadius: "12px",
    },
    panel: {
        backgroundColor: "#f2f2f2"
    },
}));

export default function NavTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.mainTabs}>
            <AppBar position="static" className={classes.indicator}>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    className={classes.TabColor}
                    classes={{
                        indicator: classes.indicator
                    }}
                >
                    <LinkTab label="Deliverability" href="/drafts" 
                             style={{ textTransform: "none", color: value === 0 ? "#5B009A" : "", fontWeight: value === 0 ? "bold" : "" }}/>
                    <LinkTab label="Content Analysis" href="/trash"
                             style={{ textTransform: "none", color: value === 1 ? "#5B009A" : "", fontWeight: value === 1 ? "bold" : "" }}/>
                    <LinkTab label="Action Status" href="/spam" 
                             style={{ textTransform: "none", color: value === 2 ? "#5B009A" : "", fontWeight: value === 2 ? "bold" : "" }}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.panel}>
                {props.panel0}
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.panel}>
                Content Analysis page
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.panel}>
                Action status page
            </TabPanel>
        </div>
    );
}