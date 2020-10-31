import React from 'react'
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core'
import BarGraph from '../../../../components/Graph'
import Button1 from '../../../../atom/Button/button1'
import ReportCard from '../../../../components/Card/report-card'
import {reports as item} from './static'
import AccordianContainer from './accordian-container'

const useStyle = makeStyles(theme => ({
    paper: {
        backgroundColor: "#f2f2f2",
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(1),
        },
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('md')]:{
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1), 
        },
    },
    heading: {
        fontWeight: "bold",
    },
    textIP: {
        color: "#828282",
    },
}))

const Deliverability = props => {

    const classes = useStyle()

    const Reports = item.map(report => {
        return(
            <Grid item xs={12}>
                <ReportCard 
                title = {report.name}
                percent = {report.percent}
                data = {report.data}
                />
            </Grid>
        )
    })

    return(
        <Paper elevation={0} className={classes.paper}>
            <Grid container xs={12}>
                <BarGraph />
            </Grid>

            <Grid container xs={12} className={classes.container} spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.textIP}>Sender IP 127.0.1 Reputation</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button1 />
                </Grid>
            </Grid>

            <Grid container xs={12} className={classes.container} spacing={1}>
                <AccordianContainer />
            </Grid>
            <Grid container xs={12} className={classes.container} spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="h6">Email Providers Delivery Report</Typography>
                </Grid>
                {Reports}
            </Grid>
        </Paper>
    )
}

export default Deliverability