import React from 'react'

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CAvatar,
  CCardHeader
} from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { DashboardDummyData } from 'src/utils/DashboardDummyData'

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <CCardHeader>
                <strong>LeaderBoard Dashboard</strong>
              </CCardHeader>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">Image</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Player Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Rank</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Score</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Aroma</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">XP</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Verified</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {DashboardDummyData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <img src={item.avatar.src} class="img-thumbnail" ></img>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.Rank}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.score}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.aroma}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.xp}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.user.verfied} style={{ width: 20, height: 20, }} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
