import React, { useEffect, useState } from 'react'
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
import NextIcon from 'src/assets/images/next.png'
import RestApi from 'src/services/services'
import ReactLoading from "react-loading";
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const navigation = useNavigate();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState();
    const [loading, setLoading] = useState();
    const token = localStorage.getItem('token');

    useEffect(() => {
        getUsers()
    }, [])

    const showProfileData = async (item) => {
        navigation("/userDetail", { state: { item } })
    }
    const handleDelete = (item) => {
        setVisible(true)
        setSingleData(item)
    }

    const getUsers = async () => {
        setLoading(true)
        await RestApi.getInstance().get('admin/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setData(res?.data?.data)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                alert(err?.response?.data?.message)
            })
    }
    const deleteUser = () => {
        RestApi.getInstance().delete(`admin/users/${singleData?._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setVisible(false)
                getUsers()
                setSingleData("")
            })
            .catch((err) => {
                setVisible(false)
                alert(err?.response?.data?.message)
                setSingleData("")
            })
    }
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>All Users</strong>
                    </CCardHeader>
                    {
                        loading ? (
                            <div style={{ alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>
                                <ReactLoading type="spin" color="#0000FF"
                                    height={50} width={50} />
                            </div>
                        ) : (
                            <CTable align="middle" className="mb-0 border" hover responsive>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Username</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Discord Username</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Rank</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Referral</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Total XP</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {data.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>
                                            <CTableDataCell className="text-center">
                                                <img src={`https://cryptonaire.herokuapp.com/media/${item?.avatar}`} class="img-thumbnail" height={50} width={50} ></img>
                                            </CTableDataCell>
                                            <CTableDataCell className="text-center">
                                                <div>{item.username}</div>
                                            </CTableDataCell>
                                            <CTableDataCell className="text-center">
                                                <div>{item.discord_username}</div>
                                            </CTableDataCell>
                                            <CTableDataCell className="text-center">
                                                <div>{"Rank"}</div>
                                            </CTableDataCell>
                                            <CTableDataCell className="text-center">
                                                <div>{"Refferal"}</div>
                                            </CTableDataCell>
                                            <CTableDataCell className="text-center">
                                                <div>{"XP"}</div>
                                            </CTableDataCell>
                                            <CTableDataCell className="text-center" >
                                                <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => handleDelete(item)} style={{ width: 30, height: 30, }} />
                                                <CAvatar size="lg" src={NextIcon} shape="rounded-0" onClick={() => showProfileData(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                </CTableBody>
                            </CTable>
                        )}
                    <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Delete User</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Are you sure to delete this User?</CModalBody>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                Close
                            </CButton>
                            <CButton color="primary" onClick={deleteUser}>Yes</CButton>
                        </CModalFooter>
                    </CModal>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default Users