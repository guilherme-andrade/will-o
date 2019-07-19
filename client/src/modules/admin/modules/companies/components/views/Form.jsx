import React from 'react'
import { SideModal } from '@common/components/modals'
import history from '@history'

export default function Form({ createCompany, company }) {

  function handleClose(event){
    event.stopPropagation();
    history.push('/admin/companies')
  }

  return (
    <SideModal onClose={handleClose}>
      form
    </SideModal>
  )
}
