import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app/App'
import { lightBlue, pink } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
    type: 'dark',
  },
})

ReactDOM.render(
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>,
  document.getElementById('root')
)
