import React, { Fragment } from 'react'
import { Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AdminApp from '@modules/admin/components/App'
import { LoginContainer, RegisterContainer } from '@modules/auth/components/pages'
import history from '@history'
import { GlobalStyles, theme } from '@styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Router history={history}>
          <Switch>
            <Route path="/admin" component={() => <AdminApp />} />
            <Route path="/login" component={() => <LoginContainer />} />
            <Route path="/register" component={() => <RegisterContainer />} />
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
