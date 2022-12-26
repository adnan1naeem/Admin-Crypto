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
} from '@coreui/react'
import DeleteIcon from 'src/assets/images/bin.png'
import EditIcon from 'src/assets/images/edit.png'
import { useNavigate } from 'react-router-dom'
import { WalletDummyData } from 'src/utils/WalletDummyData'
const Wallet = () => {
    const navigaton = useNavigate();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(WalletDummyData);
    const [singleData, setSingleData] = useState();

    const DeleteItem = () => {
        const tempArr = [];
        data?.filter((item) => {
            if (item?.id !== singleData?.id) {
                tempArr.push(item)
            }
        });
        setData(tempArr)
        setVisible(false)
    }

    const handleDelete = (item) => {
        setVisible(true)
        setSingleData(item)
    }

    const handleEdit = (item) => {
        navigaton("/editWallet", { state: { item } })
    }

    const handleCreate = () => {
        navigaton('/createWallet')
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <div style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }}>
                        <CButton type="submit" color="primary" onClick={handleCreate}>
                            Create Wallet
                        </CButton>
                    </div>
                    <br />
                    <CCardHeader>
                        <strong>All Wallets</strong>
                    </CCardHeader>
                    <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                            <CTableRow>
                                <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Wallet Name</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Wallet Image</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Wallet Address</CTableHeaderCell>
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
                                        <div>{item.address}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center" >
                                        <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => handleDelete(item)} style={{ width: 30, height: 30, }} />
                                        <CAvatar size="lg" src={EditIcon} shape="rounded-0" onClick={() => handleEdit(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                    <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Delete Wallet</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Are you sure to delete this wallet?</CModalBody>
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

export default Wallet