import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'
import { DashboardHeaderNav, DashboardHeaderNavButton } from '@common/components/layouts/DashboardLayout'

export default function Header() {
  return (
    <DashboardHeaderNav>
      <h2>Companies</h2>
      <DashboardHeaderNavButton variant="textColor" to="/admin/companies/new">
        Create New
        <FontAwesomeIcon icon={faPlus} />
      </DashboardHeaderNavButton>
    </DashboardHeaderNav>
  )
}
