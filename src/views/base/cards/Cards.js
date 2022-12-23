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
  CImage,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CDropdownToggle,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
} from '@coreui/react'
import { DashboardDummyData } from 'src/utils/DashboardDummyData'
import DeleteIcon from 'src/assets/images/bin.png'
import UserIcon from 'src/assets/images/user.webp'
import NextIcon from 'src/assets/images/next.png'
const Cards = () => {
  const [visible, setVisible] = useState(false);
  const [profileDetail, setProfileDetail] = useState(false);
  const [userData, setUserData] = useState();
  const [data, setData] = useState(DashboardDummyData);
  const [singleData, setSingleData] = useState();
  const [rank, setRank] = useState("Select Rank");
  const [category, setCategory] = useState("Select Category")

  const showProfileData = (item) => {
    setUserData(item);
    setProfileDetail(true)
  }
  const DeleteItem = () => {
    const tempArr = [];
    data?.filter((item) => {
      console.log(item?.id, singleData?.id, "saim")
      if (item?.id !== singleData?.id) {
        tempArr.push(item)
      }
    });
    setData(tempArr)
    setVisible(false)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <div style={{ marginRight: 20, marginTop: 20, marginBottom: 20, alignSelf: 'flex-end' }}>
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
            <CButton style={{ marginLeft: 10, }} type="submit" color="secondary" >
              Export
            </CButton>
          </div>
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
              {data.map((item, index) => (
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
                    <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => { setVisible(true), setSingleData(item) }} style={{ width: 30, height: 30, }} />
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
              <CButton color="primary" onClick={DeleteItem}>Yes</CButton>
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
              <div style={{ paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                <CAccordion flush>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>Wallet Details</CAccordionHeader>
                    <CAccordionBody>
                      <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                        <CRow>
                          <CCol style={{ marginLeft: 4 }}>
                            <strong>{"Total Wallet:"}</strong>
                          </CCol>
                          <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                            <small>{"2"}</small>
                          </CCol>
                        </CRow>
                      </div>
                      <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                        <CRow>
                          <CCol style={{ marginLeft: 4 }}>
                            <strong>{"Bit Coin Wallet Address:"}</strong>
                          </CCol>
                          <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                            <small>{"2543647w4vfdg"}</small>
                          </CCol>
                        </CRow>
                      </div>
                      <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                        <CRow>
                          <CCol style={{ marginLeft: 4 }}>
                            <strong>{"Ethereum Wallet Address"}</strong>
                          </CCol>
                          <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                            <small>{"765e4gfd24tvedv"}</small>
                          </CCol>
                        </CRow>
                      </div>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
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
