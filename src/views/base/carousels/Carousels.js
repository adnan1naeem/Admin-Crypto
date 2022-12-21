import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCardBody,
  CFormTextarea
} from '@coreui/react'

const Carousels = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <>
            <CCardHeader>
              <strong>Push Notifications</strong>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Title</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlTextarea1" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Message</CFormLabel>
                  <CFormTextarea type="text" id="exampleFormControlTextarea1" rows={5} />
                </div>
                <div style={{ marginTop: 20 }}>
                  <CButton type="submit" color="primary" onClick={() => setFormView(false)}>
                    Submit
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Carousels
