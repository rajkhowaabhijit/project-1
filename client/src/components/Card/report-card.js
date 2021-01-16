import React from 'react'
import { Card, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core'
import ReportTable from '../Table/report-table'
import SimpleBadge from '../../atom/Badge/badge'

const useStyle = makeStyles(theme=> ({
    badge: {
        marginRight: theme.spacing(7),
        marginLeft: theme.spacing(7)
    },
    title: {
        fontSize : "25px",
        [theme.breakpoints.down("md")]: {
            fontSize : theme.typography.fontSize,
        }
    },
    container: {
        [theme.breakpoints.down("md")]: {
            padding: 0
        }
    },
    cardHeader: {
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2)
        }
    },
    badgeBox:{
        [theme.breakpoints.down("md")]:{
            width: "80px",
        }
    }
}))

const ReportCard = props => {

    const classes = useStyle()
    return(
        <Card elevation={0}>
            <CardHeader title = {
                <Grid container className={classes.container}>
                    <Grid item xs={4} md={3}><Typography className={classes.title}> {props.title} </Typography></Grid>
                    <Grid container justify="flex-start" item xs={8} >
                            {
                            props.percent.map((per,i)=>{
                                return(
                                    <div key={i} className={classes.badgeBox}>
                                                {
                                                per.inbox > 0 ? (
                                                    <Grid item className={classes.badge}>
                                                        <SimpleBadge name= {`Inbox:${per.inbox}%`} color="#5b009a" bgcolor="#5b009a26" />
                                                    </Grid>
                                                ): 
                                                per.spam > 0 ? (
                                                    <Grid item className={classes.badge}>
                                                        <SimpleBadge name= {`Spam:${per.spam}%`} color="#eb5757" bgcolor="#eb575726" />
                                                    </Grid>
                                                ): 
                                                per.undelivered > 0 ? (
                                                    <Grid item className={classes.badge}>
                                                        <SimpleBadge name= {`Undelivered:${per.undelivered}%`} color="#bdbdbd" bgcolor="#bdbdbd26" />
                                                    </Grid>
                                                ): 
                                                per.tabs > 0 ? (
                                                    <Grid item className={classes.badge}>
                                                        <SimpleBadge name= {`Tabs:${per.tabs}%`} color="#f2994a" bgcolor="#f2994a26" />
                                                    </Grid>
                                                ): null
                                                }
                                    </div>
                                )
                            })
                            } 
                    </Grid>
                </Grid>
            }
            className={classes.cardHeader}
            />
            <ReportTable data = {props.data} />
        </Card>
    )
}

export default ReportCard