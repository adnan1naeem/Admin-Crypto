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
import { QuestionDummyData } from 'src/utils/QuestionDummyData';
import DeleteIcon from 'src/assets/images/bin.png'
import EditIcon from 'src/assets/images/edit.png'
import verified from 'src/assets/images/verify.png'
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const navigation = useNavigate();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(QuestionDummyData);
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
        navigation("/editQuestions", { state: { item } })
    }
    const handleCreate = () => {
        navigation("/createQuestion")
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
                            Add Question
                        </CButton>
                    </div>
                    <CCardBody>
                        <CCardHeader>
                            <strong>All Questions</strong>
                        </CCardHeader>
                        <CTable align="middle" className="mb-0 border" hover responsive >
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell className="text-center">Category Name</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Question Type</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Question Text</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Question Difficulty</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Answer</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">status</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {data.map((item, index) => (
                                    <CTableRow v-for="item in tableItems" key={index}>
                                        <CTableDataCell className="text-center">
                                            <div>{item.name}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <div>{item.type}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <div>{item.description}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <div>{item.difficulty}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <div>{item.answer}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <CAvatar size="md" src={verified} style={{ width: 20, height: 20, }} />
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
                            <CModalTitle>Delete Question</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Are you sure to delete this question?</CModalBody>
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

export default Questions
