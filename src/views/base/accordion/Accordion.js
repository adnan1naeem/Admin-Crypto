import React, { useState } from 'react'
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
  CTable
} from '@coreui/react'

const Accordion = () => {
  const [formView, setFormView] = useState(false);
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
                          <CTableHeaderCell className="text-center">Category Name</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Category Description</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Category Logo</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Category Reward</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Sponsored By</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Sponsored Image</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody></CTableBody>
                    </CTable>
                  </CCardBody>
                </>
              )
            }
          </>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
