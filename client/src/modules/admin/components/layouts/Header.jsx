import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AdminHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Button = styled(Link)`
  ${props => props.theme.button(props)}
`

export default function Header() {
  return (
    <AdminHeader>
      <h2>Companies</h2>
      <Button variant="secondary" to="/admin/companies/new">Create New</Button>
    </AdminHeader>
  )
}
