import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'da-custom'; // Customize the class name prefix here

const App = ({ history }) => {
  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App