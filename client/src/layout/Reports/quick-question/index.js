import React from 'react'
import {makeStyles, Paper, Breadcrumbs, Link } from '@material-ui/core'
import NavTabs from '../../../components/Tabs/report-tabs'

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
        fontWeight: "bold"
    }
}))

const QuickQuestion = () => {

    const classes = useStyle()

    return(
        <Paper elevation={0} className={classes.main}>
            <Breadcrumbs className={classes.breadcrumbs}>
                <Link color="#5b009a" href="#">
                    Reports
                </Link>
                <Link
                    color="textPrimary"
                    href="#"
                    aria-current="page"
                >
                    Quick Question
                </Link>
            </Breadcrumbs>
            <NavTabs />

        </Paper>
    )
}

export default QuickQuestion