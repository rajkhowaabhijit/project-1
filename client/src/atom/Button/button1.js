import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    button1: props => ({
      color: props.color,
      backgroundColor: props.bgColor, //'#5b009a40',
      padding: '15px 25px',
      fontSize: 'large',
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize
      },
      textTransform: 'none',
      borderRadius: '5px',
      "&:hover": {
        backgroundColor: props.bgColor
      }
    }),
}))

const Button1 = props => {
    const {children} = props
    const classes = useStyles(props)

    return (
    <Button type={props.type} onSubmit={props.onSubmit} disabled={props.disabled} className={classes.button1}>{children}</Button>
    )
}

export default Button1