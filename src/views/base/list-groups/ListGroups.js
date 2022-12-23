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
  CForm,
  CFormLabel,
  CCardBody,
  CFormInput,
  CDropdownToggle,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
} from '@coreui/react'
import DeleteIcon from 'src/assets/images/bin.png'
import EditIcon from 'src/assets/images/edit.png'
import { RewardDummyData } from 'src/utils/RewardDummyData'
const ListGroups = () => {
  const [visible, setVisible] = useState(false);
  const [formView, setFormView] = useState(false);
  const [data, setData] = useState(RewardDummyData);
  const [singleData, setSingleData] = useState();
  const [reward, setReward] = useState("Select Reward");

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
          <>
            {
              formView ? (
                <>
                  <CCardHeader>
                    <strong>Create Reward</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CForm>
                      <CDropdown style={{ marginBottom: 10 }}>
                        <CDropdownToggle href="#" color="secondary" >
                          {reward}
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={() => setReward("Token")} >Token</CDropdownItem>
                          <CDropdownItem onClick={() => setReward("Pepper")}>Pepper</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Image</CFormLabel>
                        <CFormInput type="file" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Token Name</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <CRow>
                        <CCol sm={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Air Drop 1st</CFormLabel>
                            <CFormInput type="text" id="exampleFormControlTextarea1" />
                          </div>
                        </CCol>
                        <CCol sm={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Air Drop 2nd</CFormLabel>
                            <CFormInput type="text" id="exampleFormControlTextarea1" />
                          </div>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol sm={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Air Drop 3rd</CFormLabel>
                            <CFormInput type="text" id="exampleFormControlTextarea1" />
                          </div>
                        </CCol>
                        <CCol sm={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Air Drop 4th</CFormLabel>
                            <CFormInput type="text" id="exampleFormControlTextarea1" />
                          </div>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol sm={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Air Drop 5th</CFormLabel>
                            <CFormInput type="text" id="exampleFormControlTextarea1" />
                          </div>
                        </CCol>
                        <CCol sm={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Air Drop after 5th</CFormLabel>
                            <CFormInput type="text" id="exampleFormControlTextarea1" />
                          </div>
                        </CCol>
                      </CRow>
                      <div style={{ marginTop: 20 }}>
                        <button type="button" style={{ marginRight: 20 }} onClick={() => setFormView(false)} class="btn btn-dark">Back</button>
                        <CButton type="submit" color="primary" onClick={() => setFormView(false)}>
                          Submit
                        </CButton>
                      </div>
                    </CForm>
                  </CCardBody>
                </>
              ) : (
                <>
                  <div style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }}>
                    <CButton type="submit" color="primary" onClick={() => setFormView(true)}>
                      Create Reward
                    </CButton>
                    <CButton style={{ marginLeft: 10, }} type="submit" color="secondary" >
                      Export
                    </CButton>
                  </div>
                  <br />
                  <CCardHeader>
                    <strong>All Tokens</strong>
                  </CCardHeader>
                  <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Token Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Token Image</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Reward</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center">
                            <div>{item.id}</div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <div>{item.name}</div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CAvatar size="md" src={item.avatar.src} style={{ width: 50, height: 50, }} />
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <div>{item.reward}</div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center" >
                            <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => { setVisible(true), setSingleData(item) }} style={{ width: 30, height: 30, }} />
                            <CAvatar size="lg" src={EditIcon} shape="rounded-0" onClick={() => setFormView(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </>
              )
            }
          </>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Delete Reward</CModalTitle>
            </CModalHeader>
            <CModalBody>Are you sure to delete this reward?</CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary" onClick={DeleteItem}>Yes</CButton>
            </CModalFooter>
          </CModal>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListGroups