import React, { useState } from 'react'
import {
    CCard,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CForm,
    CFormLabel,
    CCardBody,
    CFormInput,
    CDropdownToggle,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom';
const CreateReward = () => {
    const navigation = useNavigate();
    const [firstReward, setFirstReward] = useState("");
    const [secondReward, setSecondReward] = useState("");
    const [thirdReward, setThirdReward] = useState("");
    const [forthReward, setForthReward] = useState("");
    const [fifthReward, setFifthReward] = useState("");
    const [afterFifthReward, setAfterFifthReward] = useState("");
    const [reward, setReward] = useState("Select Token");
    const [category, setCategory] = useState("Select Category")

    const handleBack = () => {
        navigation('/rewards')
    }
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Create Reward</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div style={{ marginBottom: 10 }}>
                                <CDropdown >
                                    <CDropdownToggle href="#" color="secondary" >
                                        {reward}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setReward("Bitcoin")} >Bitcoin</CDropdownItem>
                                        <CDropdownItem onClick={() => setReward("Ethereum")}>Ethereum</CDropdownItem>
                                        <CDropdownItem onClick={() => setReward("Tether")}>Tether</CDropdownItem>
                                        <CDropdownItem onClick={() => setReward("BNB")}>BNB</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CDropdown style={{ marginLeft: 20 }}>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {category}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setCategory("Daily")} >Daily</CDropdownItem>
                                        <CDropdownItem onClick={() => setCategory("Weekly")}>Weekly</CDropdownItem>
                                        <CDropdownItem onClick={() => setCategory("Monthly")}>Monthly</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            <CRow>
                                <CCol sm={6}>
                                    <div className="mb-3">
                                        <CFormLabel >Air Drop 1st</CFormLabel>
                                        <CFormInput type="text" value={firstReward} onChange={(e) => setFirstReward(e.target.value)} />
                                    </div>
                                </CCol>
                                <CCol sm={6}>
                                    <div className="mb-3">
                                        <CFormLabel >Air Drop 2nd</CFormLabel>
                                        <CFormInput type="text" value={secondReward} onChange={(e) => setSecondReward(e.target.value)} />
                                    </div>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol sm={6}>
                                    <div className="mb-3">
                                        <CFormLabel >Air Drop 3rd</CFormLabel>
                                        <CFormInput type="text" value={thirdReward} onChange={(e) => setThirdReward(e.target.value)} />
                                    </div>
                                </CCol>
                                <CCol sm={6}>
                                    <div className="mb-3">
                                        <CFormLabel>Air Drop 4th</CFormLabel>
                                        <CFormInput type="text" value={forthReward} onChange={(e) => setForthReward(e.target.value)} />
                                    </div>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol sm={6}>
                                    <div className="mb-3">
                                        <CFormLabel >Air Drop 5th</CFormLabel>
                                        <CFormInput type="text" value={fifthReward} onChange={(e) => setFifthReward(e.target.value)} />
                                    </div>
                                </CCol>
                                <CCol sm={6}>
                                    <div className="mb-3">
                                        <CFormLabel >Air Drop after 5th</CFormLabel>
                                        <CFormInput type="text" value={afterFifthReward} onChange={(e) => setAfterFifthReward(e.target.value)} />
                                    </div>
                                </CCol>
                            </CRow>
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

export default CreateReward