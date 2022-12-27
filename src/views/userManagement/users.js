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
    CImage,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
} from '@coreui/react'
import DeleteIcon from 'src/assets/images/bin.png'
import UserIcon from 'src/assets/images/user.webp'
import NextIcon from 'src/assets/images/next.png'
import CustomUserDataCard from './CustomUserDataCard'
import RestApi from 'src/services/services'
import ReactLoading from "react-loading";
import CustomWalletListCard from './customWalletListCard'

const Users = () => {
    const [visible, setVisible] = useState(false);
    const [profileDetail, setProfileDetail] = useState(false);
    const [userData, setUserData] = useState();
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState();
    const [loading, setLoading] = useState();
    const token = localStorage.getItem('token');
    const [profileLoading, setProfileLoading] = useState(false)

    useEffect(() => {
        getUsers()
    }, [])

    const showProfileData = async (item) => {
        setProfileDetail(true)
        setProfileLoading(true)
        await RestApi.getInstance().get(`admin/users/${item?._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setUserData(res?.data?.data)
                setProfileLoading(false)
            })
            .catch((err) => {
                alert(err?.response?.data?.message)
                setProfileLoading(false)
            })
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
    const profileModalClose = () => {
        setProfileDetail(false)
        setUserData("")
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
                    <CModal visible={profileDetail} onClose={profileModalClose}>
                        <CModalHeader onClose={profileModalClose} >
                            <CModalTitle >{"User Details"}</CModalTitle>
                        </CModalHeader>
                        {
                            profileLoading ? (
                                <div style={{ alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>
                                    <ReactLoading type="spin" color="#0000FF"
                                        height={50} width={50} />
                                </div>
                            ) : (
                                <CModalBody>
                                    <div className="clearfix">
                                        <CImage align="center" rounded src={`https://cryptonaire.herokuapp.com/media/${userData?.avatar}`} />
                                    </div>
                                    <div style={{ paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                                        <CAccordion flush>
                                            <CAccordionItem itemKey={1}>
                                                <CAccordionHeader>Wallet Details</CAccordionHeader>
                                                <CAccordionBody>
                                                    <CustomUserDataCard
                                                        title={"Total Wallet:"}
                                                        description={userData?.wallets?.length}
                                                    />
                                                    <CustomWalletListCard
                                                        title={"Wallet Address:"}
                                                        description={"765e4gfd24tvedv"}
                                                        earningTitle={"Earning:"}
                                                        earning={"$239"}
                                                    />
                                                </CAccordionBody>
                                            </CAccordionItem>
                                        </CAccordion>
                                    </div>
                                    <CustomUserDataCard
                                        title={"User Name:"}
                                        description={userData?.username}
                                    />
                                    <CustomUserDataCard
                                        title={"Discord userName:"}
                                        description={userData?.discord_username}
                                    />
                                    <CustomUserDataCard
                                        title={"Email:"}
                                        description={userData?.email}
                                    />
                                    <CustomUserDataCard
                                        title={"Salt:"}
                                        description={userData?.salt}
                                    />
                                    <CustomUserDataCard
                                        title={"Is Admin:"}
                                        description={JSON.stringify(userData?.isAdmin)}
                                    />
                                    <CustomUserDataCard
                                        title={"isActive:"}
                                        description={JSON.stringify(userData?.isActive)}
                                    />
                                </CModalBody>
                            )}
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setProfileDetail(false)}>
                                Close
                            </CButton>
                        </CModalFooter>
                    </CModal>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default Users