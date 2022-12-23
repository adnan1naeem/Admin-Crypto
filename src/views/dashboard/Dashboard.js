import React, { useState } from 'react'

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
  CCardHeader,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownItem,
  CButton
} from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { DashboardDummyData } from 'src/utils/DashboardDummyData'

const Dashboard = () => {
  const [rank, setRank] = useState("Select Rank");
  const [category, setCategory] = useState("Select Category")
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <div style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }}>
              <CDropdown style={{ marginRight: 10 }}>
                <CDropdownToggle href="#" color="secondary" >
                  {rank}
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem onClick={() => setRank("Daily")} >Daily</CDropdownItem>
                  <CDropdownItem onClick={() => setRank("Weekly")}>Weekly</CDropdownItem>
                  <CDropdownItem onClick={() => setRank("Monthly")}>Monthly</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown style={{ marginRight: 10 }}>
                <CDropdownToggle href="#" color="secondary" >
                  {category}
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem onClick={() => setCategory("Test 1")} >Test 1</CDropdownItem>
                  <CDropdownItem onClick={() => setCategory("Test 2")}>Test 2</CDropdownItem>
                  <CDropdownItem onClick={() => setCategory("Test 3")}>Test 3</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CButton type="submit" color="secondary" >
                Export
              </CButton>
            </div>
            <CCardBody>
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
