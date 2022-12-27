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
import RestApi from 'src/services/services';
import ReactLoading from "react-loading";
const EditWallet = () => {
    const data = useLocation();
    const navigation = useNavigate();
    const [walletType, setWalletType] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState("");
    const [walletId, setWalletId] = useState("")
    const token = localStorage.getItem('token');

    useEffect(() => {
        setWalletType(data?.state?.item?.type);
        setWalletId(data?.state?.item?._id);
        setAddress(data?.state?.item?.address)
    }, [])
    const handleBack = () => {
        navigation('/wallet')
    }

    const updateWallet = async () => {
        setLoading(true)
        if (!walletType) {
            alert("Wallet Type Required");
            setLoading(false)
            return;
        }
        const data = {
            type: walletType,
        }
        await RestApi.getInstance().patch(`admin/wallets/${walletId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setLoading(false)
                navigation("/wallet")
            })
            .catch((err) => {
                setLoading(false)
                alert(err?.response?.data?.message)
            })
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Edit Wallet</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel >Wallet Type</CFormLabel>
                                <CFormInput type="text" value={walletType} onChange={(e) => setWalletType(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Wallet Image</CFormLabel>
                                <CFormInput type="file" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel >Wallet Address</CFormLabel>
                                <CFormInput type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button type="button" style={{ marginRight: 20 }} onClick={handleBack} class="btn btn-dark">Back</button>
                                {
                                    loading ? (
                                        <CButton color="primary" className="px-4" >
                                            <div style={{ alignSelf: 'center' }}>
                                                <ReactLoading type="spin" color="#ffffff"
                                                    height={30} width={30} />
                                            </div>
                                        </CButton>
                                    ) : (
                                        <CButton color="primary" className="px-4" type="submit" onClick={updateWallet}>
                                            Submit
                                        </CButton>
                                    )
                                }
                            </div>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EditWallet