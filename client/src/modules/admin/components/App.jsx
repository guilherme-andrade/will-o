import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router'
import { DashboardLayout } from '@common/components/layouts'
import { AdminHeader, AdminSidebar } from './layouts'
import { requireAuth } from '@modules/auth/helpers'

import {
  IndexContainer as CompaniesIndexContainer,
} from '../modules/companies/components/pages'

import {
  IndexContainer as UsersIndexContainer
} from '../modules/users/components/pages'

function AdminApp({ location }) {
  const [dashboardExpanded, setdashboardExpanded] = useState(false)

  function handleDashboardExpand(expanded) {
    setdashboardExpanded(expanded)
  }

  return (
    <DashboardLayout header={<AdminHeader />} sidebar={<AdminSidebar expanded={dashboardExpanded} />} onExpand={handleDashboardExpand} >
      <Switch location={location}>
        <Route exact path="/admin/users" component={() => <UsersIndexContainer />} />
        <Route path="/admin/companies" component={() => <CompaniesIndexContainer />} />
      </Switch>
    </DashboardLayout>
  )
}

export default withRouter(requireAuth(AdminApp));
