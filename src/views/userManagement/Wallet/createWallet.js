import React, { useState } from 'react'
import {
    CCard,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CForm,
    CFormLabel,
    CCardBody,
    CFormInput
} from '@coreui/react'
import { useLocation, useNavigate, useHis } from 'react-router-dom';
const CreateWallet = () => {
    const data = useLocation();
    const navigation = useNavigate();
    const [tokenName, setTokenName] = useState("");
    const [address, setAddress] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleBack = () => {
        navigation('/wallet')
    }


    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Create Wallet</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel >Wallet Name</CFormLabel>
                                <CFormInput type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Wallet Image</CFormLabel>
                                <CFormInput type="file" value={selectedImage} onChange={(event) => {
                                    setSelectedImage(event.target.files[0]);
                                }} />
                            </div>
                            <div className="mb-3">
                                <CFormLabel >Wallet Address</CFormLabel>
                                <CFormInput type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button type="button" style={{ marginRight: 20 }} onClick={handleBack} class="btn btn-dark">Back</button>
                                <CButton type="submit" color="primary">
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

export default CreateWallet