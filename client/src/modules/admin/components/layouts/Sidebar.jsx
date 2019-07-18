import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/pro-light-svg-icons'

const AdminSidebar = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AdminSidebarLink =  styled(Link)`
  display: flex;
  justify-content: center;
`

export default function Sidebar({ expanded }) {
  return (
    <AdminSidebar>
      <AdminSidebarLink to="/admin/companies">
        <FontAwesomeIcon icon={faBuilding} />
      </AdminSidebarLink>
    </AdminSidebar>
  )
}
