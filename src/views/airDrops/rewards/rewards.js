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
import { RewardDummyData } from 'src/utils/RewardDummyData'
import { useNavigate } from 'react-router-dom'
const Rewards = () => {
    const navigaton = useNavigate();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(RewardDummyData);
    const [singleData, setSingleData] = useState();

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
    const handleCreate = () => {
        navigaton("/createReward")
    }
    const handleEdit = (item) => {
        navigaton("/editReward", { state: { item } })
    }
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <div style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }}>
                        <CButton type="submit" color="primary" onClick={handleCreate}>
                            Create Reward
                        </CButton>
                    </div>
                    <br />
                    <CCardHeader>
                        <strong>Rewards</strong>
                    </CCardHeader>
                    <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                            <CTableRow>
                                <CTableHeaderCell className="text-center">Id</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Token</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Category</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">1st</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">2nd</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">3rd</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">4th</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">5th</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">After 5th</CTableHeaderCell>
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
                                        <div>{item.reward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.firstReward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.secondReward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.thirdReward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.forthReward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.fifthReward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.afterFifthReward}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center" >
                                        <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => { setVisible(true), setSingleData(item) }} style={{ width: 30, height: 30, }} />
                                        <CAvatar size="lg" src={EditIcon} shape="rounded-0" onClick={() => handleEdit(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
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

export default Rewards