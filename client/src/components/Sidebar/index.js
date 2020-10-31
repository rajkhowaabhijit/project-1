import React from 'react'
import {CardMedia, Divider, Drawer, makeStyles, Typography } from '@material-ui/core'
import Logo from '../../assets/images/logo.png'

const useStyle = makeStyles(theme=>({
    drawer: {
        width: 240,
        [theme.breakpoints.down('md')]: {
            width: 100,
          },
        flexShrink: 0,
        backgroundColor: "#fffff",
    },
    drawerPaper: {
        width : 240,
        [theme.breakpoints.down('md')]: {
            width: 100,
          },
    },
    logo: {
        marginTop: theme.spacing(3),
        height: "50px",
        width: "100%",
        backgroundSize: "contain"
    }
}))

const Sidebar = () => {

    const classes = useStyle()

    return(
            <Drawer 
            className={classes.drawer}
            anchor="left"
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            >
                <CardMedia image={Logo} className={classes.logo} />
                <Divider />
            </Drawer>
    )
}

export default Sidebar