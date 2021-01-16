import React, {Suspense} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './route'
import {makeStyles, LinearProgress } from "@material-ui/core"
import Sidebar from "./components/Sidebar/main-sidebar"

const useStyles = makeStyles((theme) => ({
  displayPageWrapper: () => ({
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '240px',
    },
  }), 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em',
      height: '0.2em'
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

  const menu = routes.map((route, index) => {
    return (route.component) ? (
      <Route 
        key={`${index}-route`}
        exact={route.exact}
        path={route.path}
        render={props => <route.component {...props} />}
      /> 
    ) : null
  })

  return (
    <div>
        <Sidebar />
        <div className={classes.displayPageWrapper}>
          <Suspense fallback={<LinearProgress />}>
          <Router>
            <Switch>
              {menu}
              <Redirect from="/" to="/reports/quick-question" />
            </Switch>
          </Router>
        </Suspense>
        </div>
    </div>
  );
}

export default App;
