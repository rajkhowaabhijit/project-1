import React from 'react'
import {Breadcrumbs, Card, Grid, makeStyles, Paper, Typography} from '@material-ui/core'
import TestForm from './TestForm'

const useStyle = makeStyles(theme=>({
    main: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(1),
        },
        backgroundColor: "#f2f2f2"
    },
    breadcrumbs: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        color: "#5b009a"
    },
    container: {
        padding: theme.spacing(2)
    },
    heading: {
        fontWeight: "bold"
    },
    button: {
        margin: theme.spacing(4)
    }
}))

const SpamTest = () => {
    const classes = useStyle()

    return (
        <Paper elevation={0} className={classes.main}>
            <Breadcrumbs className={classes.breadcrumbs}>
                <Typography variant="h6">
                    Start Spam Test
                </Typography>
            </Breadcrumbs>

            <Card elevation={0} className={classes.container}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.heading}>
                            Send your email
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TestForm />
                    </Grid>
                </Grid>
            </Card>

        </Paper>    
    )
}

export default SpamTest
