import React from 'react'
import {Grid, makeStyles, Typography } from '@material-ui/core'
import {Formik,Field, Form} from 'formik'
import * as Yup from 'yup'
import Button1 from '../../atom/Button/button1'
import { TextField } from 'formik-material-ui'
import { Assignment, GetApp } from '@material-ui/icons'

const useStyle = makeStyles(theme=>({
    buttonContainer: {
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            padding: 0
        }
    },
    button: {
        margin: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            marginLeft: 0
        }
    },
    field:{
        backgroundColor: "#f2f2f2",
        borderRadius: "5px",
    },
    comma: {
        color: "#90a4ae"
    },
    container: {
        marginTop: theme.spacing(2)
    },
    buttonsContainer: {
        marginTop: theme.spacing(4)
    }
}))

const TestForm = () => {

    const classes = useStyle()

    const initialValues = {
        IP : "123.934358473",
        confirmIp : "123.934358473",
        seedList : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,"
    }

    const validationSchema = Yup.object({
        IP: Yup.string().required('Required'),
        confirmIp: Yup.string().required('Required').oneOf([Yup.ref('IP'),null],'IP Address must matched'),
        seedList: Yup.string().required('Required')
    })

    const handleSubmit = values =>{
        console.log(values);
    }

    return (
        <div>
            <Formik 
            initialValues ={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
                {
                    formik => {
                        return(
                            <Form>
                            <Grid container>
                                <Grid container className={classes.container}>
                                <Typography>1. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Field 
                                    component = {TextField}
                                    type="text"
                                    label=""
                                    name="IP"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    className={classes.field}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} className={classes.buttonContainer}>
                                    <Button1 bgColor="#5b009a40" color="#5b009a">{<Assignment/>}Copy to clipboard</Button1>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid container className={classes.container}>
                                <Typography>2. consectetur adipiscing elit, sed do eiusmod tempor.</Typography>
                                </Grid>
                                <Grid container>
                                <Typography className={classes.comma}>Comma(,)</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field 
                                    component = {TextField}
                                    type="text"
                                    label=""
                                    name="confirmIp"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    className={classes.field}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid container className={classes.container}>
                                <Typography>1. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Field 
                                    component = {TextField}
                                    type="text"
                                    name="seedList"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    rows="10"
                                    className={classes.field}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} className={classes.buttonContainer}>
                                    <div className={classes.button}>
                                        <Button1 bgColor="#5b009a40" color="#5b009a">{<Assignment/>} Copy Seed List</Button1>
                                    </div>
                                    <div className={classes.button}>
                                        <Button1 bgColor="#5b009a40" color="#5b009a">{<GetApp />} Download Seed List</Button1>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                <Grid container spacing={2} className={classes.buttonsContainer}>
                                    <Grid item>
                                        <Button1 type="submit" bgColor="#5b009a" color="white" onSubmit={handleSubmit} disabled={(!formik.isValid && formik.dirty)} className={classes.button}>View Reports</Button1>
                                    </Grid>
                                    <Grid item>
                                        <Button1 bgColor="#5b009a40" color="#5b009a" className={classes.button}>Cancel test & return credit</Button1>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default TestForm
