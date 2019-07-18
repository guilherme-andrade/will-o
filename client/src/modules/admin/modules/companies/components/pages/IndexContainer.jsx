import React, { Fragment } from 'react'
import { Query } from 'react-apollo';
import { Switch, Route } from 'react-router'
import { GraphqlClient } from '../../api';
import { AdminCompaniesTable } from '../views';
import { NewContainer } from './'

export default function IndexContainer() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/admin/companies/new" component={() => <NewContainer />} />
      </Switch>
      <Query query={GraphqlClient.GET_COMPANIES}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return <AdminCompaniesTable companies={data.getCompanies} />
        }}
      </Query>
    </Fragment>
  )
}
