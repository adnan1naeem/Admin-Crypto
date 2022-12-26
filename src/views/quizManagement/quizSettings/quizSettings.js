import React, { useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTableBody,
    CTable,
    CTableDataCell,
    CAvatar,
    CModal,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalTitle,
} from '@coreui/react'
import DeleteIcon from 'src/assets/images/bin.png'
import EditIcon from 'src/assets/images/edit.png'
import { useNavigate } from 'react-router-dom';
import { QuizDummyData } from 'src/utils/QuizDummyData'

const QuizSettings = () => {
    const navigation = useNavigate()
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(QuizDummyData)
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

    const handleEdit = (item) => {
        navigation("/editQuizSetting", { state: { item } })
    }
    const handleCreate = () => {
        navigation("/createQuizSettings")
    }
    const handleDelete = (item) => {
        setVisible(true)
        setSingleData(item)
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <div style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }}>
                        <CButton type="submit" color="primary" onClick={handleCreate}>
                            Add Quiz Setting
                        </CButton>
                    </div>
                    <CCardBody>
                        <CCardHeader>
                            <strong>All Categories</strong>
                        </CCardHeader>
                        <CTable align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell className="text-center" >Id</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Quiz Name</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Easy Range</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Intermediate Range</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Export Range</CTableHeaderCell>
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
                                            <div>{`${item?.easyStart} - ${item?.easyEnd}`}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <div>{`${item?.mediumStart} - ${item?.mediumEnd}`}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <div>{`${item?.expertStart} - ${item?.expertEnd}`}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center" >
                                            <CAvatar size="sm" src={DeleteIcon} shape="rounded-0" onClick={() => handleDelete(item)} style={{ width: 20, height: 20 }} />
                                            <CAvatar size="sm" src={EditIcon} shape="rounded-0" onClick={() => handleEdit(item)} style={{ marginLeft: 5 }} />
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                    <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Delete Quiz</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Are you sure to delete this Quiz?</CModalBody>
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

export default QuizSettings
