import React, { useState } from 'react'
import { Switch, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { DashboardLayout } from '@common/components/layouts';
import { AdminHeader, AdminSidebar } from './layouts';

import { themeSettings, ThemeConsumer } from '../theme';

import {
  IndexContainer as CompaniesIndexContainer,
} from '../modules/companies/components/pages'

import {
  IndexContainer as UsersIndexContainer
} from '../modules/users/components/pages'

export default function IndexContainer() {
  const [dashboardExpanded, setdashboardExpanded] = useState(false)

  function handleDashboardExpand(expanded) {
    setdashboardExpanded(expanded)
  }

  return (
    <ThemeProvider theme={themeSettings}>
      <ThemeConsumer>
        <DashboardLayout header={<AdminHeader />} sidebar={<AdminSidebar expanded={dashboardExpanded} />} onExpand={handleDashboardExpand} >
          <Switch>
            <Route exact path="/admin/users" component={() => <UsersIndexContainer />} />
            <Route path="/admin/companies" component={() => <CompaniesIndexContainer />} />
          </Switch>
        </DashboardLayout>
      </ThemeConsumer>
    </ThemeProvider>
  )
}

