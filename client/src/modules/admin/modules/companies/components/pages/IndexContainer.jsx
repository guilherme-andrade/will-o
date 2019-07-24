import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
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
      <Table rows={[]} headers={headers} />
    </Fragment>
  )
}
