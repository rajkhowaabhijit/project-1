import React from 'react'
import {CardMedia, Divider, Drawer,Grid, makeStyles} from '@material-ui/core'
import Logo from '../../assets/images/logo.png'

const useStyle = makeStyles(theme=>({
    drawer: {
        width: 240,
        [theme.breakpoints.down('md')]: {
            display : "none"
          },
        flexShrink: 0,
        backgroundColor: "#fffff",
    },
    drawerPaper: {
        width : 240,
        [theme.breakpoints.down('md')]: {
            display : "none"
          },
    },
    logo: {
        marginTop: theme.spacing(3),
        height: "50px",
        width: "100%",
        backgroundSize: "contain"
    },
    mobileLogoView: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
            height: "50px",
            width: "100%",
            backgroundSize: "contain"
        }
    }
}))

const Sidebar = () => {

    const classes = useStyle()

    return(
        <>
            <Drawer 
            className={classes.drawer}
            anchor="top"
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            >
                <CardMedia image={Logo} className={classes.logo} />
                <Divider />
            </Drawer>
            <Grid container item xs={7} className={classes.mobileLogoView}>
                <CardMedia image={Logo} className={classes.logo} />
            </Grid>
        </>
    )
}

export default Sidebar