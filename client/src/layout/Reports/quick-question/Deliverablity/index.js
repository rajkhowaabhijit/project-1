import React from 'react'
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core'
import BarGraph from '../../../../components/Graph/barGraph'
import Button1 from '../../../../atom/Button/button1'
import ReportCard from '../../../../components/Card/report-card'
import ControledAccordians from '../../../../components/Accordian/accordian'
import SimpleBadge from '../../../../atom/Badge/badge'
import {reports as item} from './static'
import {accordianContent as item2} from './static'
import {chartData} from './static'

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
    accordianBadges: {
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5),
    },
    heading: {
        fontWeight: "bold",
    },
    textIP: {
        color: "#828282",
    },
}))

const Deliverability = () => {

    const classes = useStyle()

    const Reports = item.map((report,i) => {
        return(
            <Grid item xs={12} key={i}>
                <ReportCard 
                title = {report.name}
                percent = {report.percent}
                data = {report.data}
                />
            </Grid>
        )
    })

    const AccordianContainer = item2.map((content,i)=> {
        return(
            <Grid item xs={12} key={i}>
            <ControledAccordians heading = {content.heading} 
                subheading = {
                    <Grid container>
                        {
                            content.subheading.map((badges,i) => {
                                return(
                                    <Grid item key={i} className={classes.accordianBadges}>
                                        <SimpleBadge name = {badges.BadgeName} color={badges.color} bgcolor={badges.bgcolor} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                }
            />
            </Grid>
        )
    })

    return(
        <Paper elevation={0} className={classes.paper}>
            <Grid container>
                <BarGraph data={chartData} />
            </Grid>

            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.textIP}>Sender IP 127.0.1 Reputation</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button1 />
                </Grid>
            </Grid>

            <Grid container className={classes.container} spacing={1}>
                {AccordianContainer} 
            </Grid>

            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="h6">Email Providers Delivery Report</Typography>
                </Grid>
                {Reports}
            </Grid>
        </Paper>
    )
}

export default Deliverability