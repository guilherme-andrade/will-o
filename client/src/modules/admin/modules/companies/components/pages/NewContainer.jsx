import React from 'react'
import { GraphqlClient } from '../../api'
import { Mutation } from 'react-apollo'
import { AdminCompanyForm } from '../views'

export default function NewContainer() {
  return (
    <Mutation mutation={GraphqlClient.CREATE_COMPANY}>
      {(createCompany, { data }) => <AdminCompanyForm createCompany={createCompany} company={data} />}
    </Mutation>
  )
}
