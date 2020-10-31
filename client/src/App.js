import React from "react"
import {makeStyles } from "@material-ui/core"
import Sidebar from "./components/Sidebar"
import QuickQuestion from "./layout/Reports/quick-question"

const useStyles = makeStyles((theme) => ({
  displayPageWrapper: props => ({
    [theme.breakpoints.down('md')]: {
      paddingLeft: '100px'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '240px',
    },
  }), 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light, 
      borderRadius: theme.shape.borderRadius 
    }
  }
}))

const App = props => {
  const classes = useStyles()
  return (
    <div>
        <Sidebar />
        <div className={classes.displayPageWrapper}>
          <QuickQuestion />
        </div>
    </div>
  );
}

export default App;
