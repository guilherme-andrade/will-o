import React from 'react'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUsers } from '@fortawesome/pro-light-svg-icons'
import { DashboardSidebarNav, DashboardSidebarLink, DashboardSidebarLinkText } from '@common/components/layouts/Dashboard'

function Sidebar({ location }) {
  function isCurrentRoute(path) {
    return location.pathname.includes(path) ? 'true' : ''
  }

  return (
    <DashboardSidebarNav>
      <DashboardSidebarLink to="/admin/companies" current={isCurrentRoute('/admin/companies')}>
        <FontAwesomeIcon icon={faBuilding} size="lg"/>
        <DashboardSidebarLinkText>
          manage
        </DashboardSidebarLinkText>
      </DashboardSidebarLink>
      <DashboardSidebarLink to="/admin/users" current={isCurrentRoute('/admin/users')}>
        <FontAwesomeIcon icon={faUsers} size="lg"/>
        <DashboardSidebarLinkText>
          manage
        </DashboardSidebarLinkText>
      </DashboardSidebarLink>
    </DashboardSidebarNav>
  )
}

export default withRouter(Sidebar)
