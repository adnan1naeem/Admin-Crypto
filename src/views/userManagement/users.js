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
    CImage,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
} from '@coreui/react'
import { DashboardDummyData } from 'src/utils/DashboardDummyData'
import DeleteIcon from 'src/assets/images/bin.png'
import UserIcon from 'src/assets/images/user.webp'
import NextIcon from 'src/assets/images/next.png'
import CustomUserDataCard from './CustomUserDataCard'

const Users = () => {
    const [visible, setVisible] = useState(false);
    const [profileDetail, setProfileDetail] = useState(false);
    const [userData, setUserData] = useState();
    const [data, setData] = useState(DashboardDummyData);
    const [singleData, setSingleData] = useState();

    const showProfileData = (item) => {
        setUserData(item);
        setProfileDetail(true)
    }
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
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>All Users</strong>
                    </CCardHeader>
                    <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                            <CTableRow>
                                <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Username</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Discord Username</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Wallets</CTableHeaderCell>
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
                                        <img src={item.avatar.src} class="img-thumbnail" ></img>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.user.name}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.user.discordUserName}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.user.Rank}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.user.score}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.user.aroma}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <div>{item.user.xp}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center" >
                                        <CAvatar size="lg" src={DeleteIcon} shape="rounded-0" onClick={() => handleDelete(item)} style={{ width: 30, height: 30, }} />
                                        <CAvatar size="lg" src={NextIcon} shape="rounded-0" onClick={() => showProfileData(item)} style={{ width: 30, height: 30, marginLeft: 10 }} />
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                    <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Delete User</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Are you sure to delete this User?</CModalBody>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                Close
                            </CButton>
                            <CButton color="primary" onClick={DeleteItem}>Yes</CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal visible={profileDetail} onClose={() => setProfileDetail(false)}>
                        <CModalHeader onClose={() => setProfileDetail(false)} >
                            <CModalTitle >{"User Details"}</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <div className="clearfix">
                                <CImage align="center" rounded src={UserIcon} style={{ width: "100%", height: undefined, aspectRatio: 1.8 }} />
                            </div>
                            <div style={{ paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
                                <CAccordion flush>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>Wallet Details</CAccordionHeader>
                                        <CAccordionBody>
                                            <CustomUserDataCard
                                                title={"Total Wallet:"}
                                                description={"2"}
                                            />
                                            <CustomUserDataCard
                                                title={"Bit Coin Wallet Address:"}
                                                description={"2543647w4vfdg"}
                                            />
                                            <CustomUserDataCard
                                                title={"Ethereum Wallet Address:"}
                                                description={"765e4gfd24tvedv"}
                                            />
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </div>
                            <CustomUserDataCard
                                title={"User Name:"}
                                description={userData?.user?.name}
                            />
                            <CustomUserDataCard
                                title={"Discord userName:"}
                                description={userData?.user?.discordUserName}
                            />
                            <CustomUserDataCard
                                title={"Rank:"}
                                description={userData?.user?.numberOfReferral}
                            />
                            <CustomUserDataCard
                                title={"Refferal:"}
                                description={userData?.user?.score}
                            />
                            <CustomUserDataCard
                                title={"Total XP:"}
                                description={userData?.user?.xp}
                            />
                            <CustomUserDataCard
                                title={"Total Earning:"}
                                description={"$456"}
                            />
                            <CustomUserDataCard
                                title={"Total Games Played:"}
                                description={"1000"}
                            />
                            <CustomUserDataCard
                                title={"Total Win Games:"}
                                description={"600"}
                            />
                            <CustomUserDataCard
                                title={"Win Percentage:"}
                                description={"60%"}
                            />
                        </CModalBody>
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