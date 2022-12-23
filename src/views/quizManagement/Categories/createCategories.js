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
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const CreateCategories = () => {
    const navigation = useNavigate()
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [reward, setReward] = useState("")
    const [sponsoredBy, setSponsoredBy] = useState("")
    const [logo, setLogo] = useState()

    const handleBack = () => {
        navigation('/Categories')
    }
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Create Category</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel >Create Category</CFormLabel>
                                <CFormInput value={category} onChange={(e) => setCategory(e.target.value)} type="text" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel >Category Description</CFormLabel>
                                <CFormInput value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel >Category Logo</CFormLabel>
                                <CFormInput type="file" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Category Reward</CFormLabel>
                                <CFormInput value={reward} onChange={(e) => setReward(e.target.value)} type="text" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Sponsored By</CFormLabel>
                                <CFormInput value={sponsoredBy} onChange={(e) => setSponsoredBy(e.target.value)} type="text" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel >Sponsored Image</CFormLabel>
                                <CFormInput type="file" />
                            </div>
                            <CFormSwitch label="Part of Daily Quiz" defaultChecked />
                            <CFormSwitch label="Crypto Challenge" defaultChecked />
                            <div className="mb-3">
                                <CFormLabel>{`Active Form (7 Days):      Tue Dec 20 2022 15:31:34  -  Tue Dec 27 2022 15:31:34`}</CFormLabel>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button type="button" style={{ marginRight: 20 }} onClick={handleBack} class="btn btn-dark">Back</button>
                                <CButton type="submit" color="primary" >
                                    Submit
                                </CButton>
                            </div>
                        </CForm>
                    </CCardBody>

                </CCard>
            </CCol>
        </CRow>
    )
}

export default CreateCategories
