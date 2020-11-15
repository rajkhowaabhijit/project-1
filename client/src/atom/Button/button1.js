import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    button1: {
      color: '#000',
      backgroundColor: '#5b009a40',
      padding: '15px 25px',
      fontSize: 'large',
      textTransform: 'none',
      borderRadius: '5px',
    }
}))

const Button1 = () => {
    const classes = useStyles()

    return (
        <Button className={classes.button1}>Monitor this IP Address</Button>
    )
}

export default Button1