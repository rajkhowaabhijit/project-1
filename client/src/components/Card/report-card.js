import React from 'react'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import ReportTable from '../Table/report-table'
import SimpleBadge from '../../atom/Badge/badge'

const useStyle = makeStyles(theme=> ({
    badge: {
        marginRight: theme.spacing(2)
    }
}))

const ReportCard = props => {

    const classes = useStyle()
    return(
        <Card elevation={0}>
            <CardHeader title = {
                       <Grid container xs={12} spacing={8}>
                       <Grid item>{props.title}</Grid>
                        {
                           props.percent.map(per=>{
                               return(
                                   <>
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
                                    </>
                               )
                           })
                        } 
                    </Grid>
            }
            ></CardHeader>
            <ReportTable data = {props.data} />
        </Card>
    )
}

export default ReportCard