import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { Switch, Route } from 'react-router'
import { GraphqlClient } from '../../api'
import { NewContainer } from './'
import { Table } from '@common-tables'
import moment from 'moment'

export default function IndexContainer() {
  const headers = [
    {
      field: 'name',
      title: 'name',
      options: {
        hideHeader: true,
        align: 'left',
      }
    },
    {
      field: 'updatedAt',
      title: 'updated',
      options: {
        hideHeader: false,
        align: 'right',
        formatField: (updatedAt) => (moment(updatedAt).fromNow())
      }
    },
    {
      field: 'createdAt',
      title: 'created',
      options: {
        hideHeader: false,
        align: 'right',
        formatField: (createdAt) => (moment(createdAt).fromNow())
      }
    }
  ]

  return (
    <Fragment>
      <Switch>
        <Route exact path="/admin/companies/new" component={() => <NewContainer />} />
      </Switch>
      <Query query={GraphqlClient.GET_COMPANIES}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return <Table rows={data.getCompanies} headers={headers} />
        }}
      </Query>
    </Fragment>
  )
}
