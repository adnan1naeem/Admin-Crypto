import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormSwitch,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTable,
  CTableDataCell,
  CAvatar,
  CImage,
  CModal,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalTitle
} from '@coreui/react'
import { CategoriesDummyData } from 'src/utils/CategoriesDummyData';
import DeleteIcon from 'src/assets/images/bin.png'
import EditIcon from 'src/assets/images/edit.png'

const Accordion = () => {
  const [formView, setFormView] = useState(false);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(CategoriesDummyData)
  const [singleData, setSingleData] = useState()

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
                    <strong>Create Category</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CForm>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Create Category</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Category Description</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Category Logo</CFormLabel>
                        <CFormInput type="file" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Category Reward</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Sponsored By</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Sponsored Image</CFormLabel>
                        <CFormInput type="file" id="exampleFormControlTextarea1" />
                      </div>
                      <CFormSwitch label="Part of Daily Quiz" id="formSwitchCheckChecked" defaultChecked />
                      <CFormSwitch label="Crypto Challenge" id="formSwitchCheckChecked" defaultChecked />
                      <div className="mb-3">
                        <CFormLabel>{`Active Form (7 Days):      Tue Dec 20 2022 15:31:34`}</CFormLabel>
                      </div>
                      <div style={{ marginTop: 20 }}>
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
                      Add Category
                    </CButton>
                  </div>
                  <CCardBody>
                    <br />
                    <CCardHeader>
                      <strong>All Categories</strong>
                    </CCardHeader>
                    <CTable align="middle" className="mb-0 border" hover responsive>
                      <CTableHead color="light">
                        <CTableRow>
                          <CTableHeaderCell className="text-center" >Category Name</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Category Description</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Category Logo</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Category Reward</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Sponsored By</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Sponsored Image</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {data.map((item, index) => (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                              <div>{item.name}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-left">
                              <div>{item.description}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center" >
                              <CAvatar size="lg" src={item?.logo} shape="rounded-0" onClick={() => console.log("test")} />
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                              <div>{item.reward}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                              <div>{item.sponsoredBy}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                              <CImage src={item.avatar.src} width={50} height={50} />
                            </CTableDataCell>
                            <CTableDataCell className="text-center" >
                              <CAvatar size="sm" src={DeleteIcon} shape="rounded-0" onClick={() => { setVisible(true), setSingleData(item) }} style={{ width: 20, height: 20 }} />
                              <CAvatar size="sm" src={EditIcon} shape="rounded-0" onClick={() => setFormView(true)} style={{ marginLeft: 5 }} />
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CCardBody>
                </>
              )
            }
          </>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Delete Category</CModalTitle>
            </CModalHeader>
            <CModalBody>Are you sure to delete this Category?</CModalBody>
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

export default Accordion
