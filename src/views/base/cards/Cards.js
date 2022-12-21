import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableHead
} from '@coreui/react'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Users</strong>
          </CCardHeader>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Username</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Discord Username</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Wallets</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Rank</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Referral</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Total XP</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody></CTableBody>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
