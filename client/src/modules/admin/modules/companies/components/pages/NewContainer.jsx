import React from 'react'
import { Mutation } from 'react-apollo'
import { GraphqlClient } from '../../api'
import { AdminCompanyForm } from '../views'

export default function NewContainer() {
  return (
    <Mutation mutation={GraphqlClient.CREATE_COMPANY}>
      {(createCompany, { data }) => <AdminCompanyForm createCompany={createCompany} company={data} />}
    </Mutation>
  )
}
