import React, { useEffect, useState } from 'react'
import {
    CCard,
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
    CNav,
    CNavItem,
    CFormLabel,
    CFormInput,
    CNavLink,
    CTabContent,
    CTabPane
} from '@coreui/react'
import RestApi from 'src/services/services'
import ReactLoading from "react-loading";
import { useLocation, useNavigate } from 'react-router-dom'
import CustomUserDataCard from '../CustomUserDataCard'
import { WalletDummyData } from 'src/utils/WalletDummyData'
import { UserTokenDummyData } from 'src/utils/TokenDummyData'
import EditIcon from 'src/assets/images/edit.png'

const UserDetail = () => {
    const data = useLocation();
    const navigation = useNavigate();
    const [profileLoading, setProfileLoading] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [balance, setBalance] = useState()
    const [activeKey, setActiveKey] = useState(1);
    const token = localStorage.getItem('token');
    const userId = data?.state?.item?._id;
    const [userData, setUserData] = useState([])

    useEffect(() => {
        getuserDetail()
    }, [])

    const getuserDetail = async (item) => {
        setProfileLoading(true)
        await RestApi.getInstance().get(`admin/users/${userId}`, {
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
    const handleEdit = (item) => {
        setEditModal(true)
        setBalance(item?.balance)
    }
    const handleBack = () => {
        navigation("/users")
    }
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    {
                        profileLoading ? (
                            <div style={{ alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>
                                <ReactLoading type="spin" color="#0000FF"
                                    height={50} width={50} />
                            </div>
                        ) : (
                            <>
                                <CNav variant="tabs" role="tablist" >
                                    <CNavItem>
                                        <CNavLink
                                            href="javascript:void(0);"
                                            active={activeKey === 1}
                                            onClick={() => setActiveKey(1)}
                                        >
                                            Info
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink
                                            href="javascript:void(0);"
                                            active={activeKey === 2}
                                            onClick={() => setActiveKey(2)}
                                        >
                                            Wallet
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink
                                            href="javascript:void(0);"
                                            active={activeKey === 3}
                                            onClick={() => setActiveKey(3)}
                                        >
                                            Balance
                                        </CNavLink>
                                    </CNavItem>
                                </CNav>
                                <CTabContent>
                                    <CTabPane role="tabpanel" style={{ margin: 20 }} aria-labelledby="home-tab" visible={activeKey === 1}>
                                        <div className="clearfix">
                                            <CImage align="flex-start" style={{ height: 130, width: 130 }} rounded src={`https://cryptonaire.herokuapp.com/media/${userData?.avatar}`} />
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
                                    </CTabPane>
                                    <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                                        <CTable align="middle" className="mb-0 border" hover responsive>
                                            <CTableHead color="light">
                                                <CTableRow>
                                                    <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Wallet Name</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Wallet Image</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Wallet Address</CTableHeaderCell>
                                                </CTableRow>
                                            </CTableHead>
                                            <CTableBody>
                                                {WalletDummyData.map((item, index) => (
                                                    <CTableRow v-for="item in tableItems" key={index}>
                                                        <CTableDataCell className="text-center">
                                                            <div>{item.id}</div>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center">
                                                            <div>{item.name}</div>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center">
                                                            <CAvatar src={item?.avatar?.src} style={{ width: 40, height: 40, }}  ></CAvatar>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center">
                                                            <div>{item.address}</div>
                                                        </CTableDataCell>
                                                    </CTableRow>
                                                ))}
                                            </CTableBody>
                                        </CTable>
                                    </CTabPane>
                                    <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                                        <CTable align="middle" className="mb-0 border" hover responsive>
                                            <CTableHead color="light">
                                                <CTableRow>
                                                    <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Token Name</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Token Image</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Balance</CTableHeaderCell>
                                                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                                                </CTableRow>
                                            </CTableHead>
                                            <CTableBody>
                                                {UserTokenDummyData.map((item, index) => (
                                                    <CTableRow v-for="item in tableItems" key={index}>
                                                        <CTableDataCell className="text-center">
                                                            <div>{item.id}</div>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center">
                                                            <div>{item.name}</div>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center">
                                                            <CAvatar src={item?.avatar?.src} style={{ width: 40, height: 40, }}  ></CAvatar>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center">
                                                            <div>{item.balance}</div>
                                                        </CTableDataCell>
                                                        <CTableDataCell className="text-center" >
                                                            <CAvatar size="lg" src={EditIcon} shape="rounded-0" onClick={() => handleEdit(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                                                        </CTableDataCell>
                                                    </CTableRow>
                                                ))}
                                            </CTableBody>
                                        </CTable>
                                    </CTabPane>
                                </CTabContent>
                                <div style={{ margin: 20 }}>
                                    <button type="button" style={{ marginRight: 20 }} onClick={handleBack} class="btn btn-dark">Back</button>
                                </div>
                            </>
                        )
                    }
                    <CModal visible={editModal} onClose={() => setEditModal(false)}>
                        <CModalHeader onClose={() => setEditModal(false)}>
                            <CModalTitle>Edit Balance</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <div className="mb-3">
                                <CFormLabel>Balance</CFormLabel>
                                <CFormInput value={balance} onChange={(e) => setBalance(e.target.value)} type="text" />
                            </div>
                        </CModalBody>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setEditModal(false)}>
                                Close
                            </CButton>
                            <CButton color="primary" onClick={() => setEditModal(false)}>Yes</CButton>
                        </CModalFooter>
                    </CModal>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default UserDetail