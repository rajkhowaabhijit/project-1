import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

const baseTheme = createMuiTheme()

ReactDOM.render(
  <Router>
      <ThemeProvider theme={baseTheme}>
        <App />
      </ThemeProvider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
