import React, { Fragment } from 'react'
import { Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import AdminApp from '@modules/admin/components/App'
import history from '@history'
import { GlobalStyles } from '@styles'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route path="/admin" component={() => <AdminApp />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
