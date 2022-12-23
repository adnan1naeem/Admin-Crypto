import React, { useEffect, useState } from 'react'
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
import { useLocation, useNavigate } from 'react-router-dom';
const EditToken = () => {
    const data = useLocation();
    const navigation = useNavigate();
    const [tokenName, setTokenName] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        setTokenName(data?.state?.item?.name);
        setAddress(data?.state?.item?.address)
    }, [])
    const handleBack = () => {
        navigation('/tokens')
    }
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Edit Token</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel >Token Name</CFormLabel>
                                <CFormInput type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Token Image</CFormLabel>
                                <CFormInput type="file" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel >Token Address</CFormLabel>
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

export default EditToken