import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import moment from 'moment'
import actions from '@admin-modules/companies/store/actions'
import { ACTION_TYPES } from '@admin-modules/companies/config'
import { NewContainer } from './'
import { Table } from '@common-tables'

function IndexContainer({ load }) {
  load()

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

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(actions[ACTION_TYPES.LOAD]())
})

export default connect(
  null,
  mapDispatchToProps
)(IndexContainer);
