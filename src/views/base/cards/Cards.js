import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableRow,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableDataCell,
  CAvatar,
  CModal,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalTitle,
  CButton,
  CImage
} from '@coreui/react'
import { DashboardDummyData } from 'src/utils/DashboardDummyData'
import DeleteIcon from 'src/assets/images/bin.png'
import UserIcon from 'src/assets/images/user.webp'
import NextIcon from 'src/assets/images/next.png'
const Cards = () => {
  const [visible, setVisible] = useState(false);
  const [profileDetail, setProfileDetail] = useState(false);
  const [userData, setUserData] = useState()

  const showProfileData = (item) => {
    setUserData(item);
    setProfileDetail(true)
  }
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
                <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
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
                    <div>{item.user.discordUserName}</div>
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
                  <CTableDataCell className="text-center" >
                    <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => setVisible(true)} style={{ width: 30, height: 30, }} />
                    <CAvatar size="lg" src={NextIcon} shape="rounded-0" onClick={() => showProfileData(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Delete User</CModalTitle>
            </CModalHeader>
            <CModalBody>Are you sure to delete this User?</CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary">Yes</CButton>
            </CModalFooter>
          </CModal>
          <CModal visible={profileDetail} onClose={() => setProfileDetail(false)}>
            <CModalHeader onClose={() => setProfileDetail(false)} >
              <CModalTitle >{"User Details"}</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="clearfix">
                <CImage align="center" rounded src={UserIcon} style={{ width: "100%", height: undefined, aspectRatio: 1.8 }} />
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"User Name:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{userData?.user?.name}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Discord userName:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{userData?.user?.discordUserName}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Wallet:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{userData?.user?.Rank}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Wallet Number:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{"34567fbg453vs"}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Rank:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{userData?.user?.numberOfReferral}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Refferal:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{userData?.user?.score}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Total XP:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{userData?.user?.xp}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Total Earning:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{"$456"}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Total Games Played:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{"1000"}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Total Win Games:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{"600"}</small>
                  </CCol>
                </CRow>
              </div>
              <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CRow>
                  <CCol style={{ marginLeft: 4 }}>
                    <strong>{"Win Percentage:"}</strong>
                  </CCol>
                  <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{"60%"}</small>
                  </CCol>
                </CRow>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setProfileDetail(false)}>
                Close
              </CButton>
            </CModalFooter>
          </CModal>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
