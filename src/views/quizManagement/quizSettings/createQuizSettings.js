import React, { useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CForm,
    CFormLabel,
    CFormInput,
    CButton,
    CDropdownToggle,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import { DropDownData } from 'src/utils/DropDownData';

const CreateQuizSettings = () => {
    const navigation = useNavigate();
    const [quizName, setQuizName] = useState("Select Quiz Name");
    const [easyStart, setEasyStart] = useState("Easy Range Start");
    const [easyEnd, setEasyEnd] = useState("Easy Range End");
    const [intermediateStart, setIntermediateStart] = useState("Intermediate Range Start");
    const [intermediateEnd, setIntermediateEnd] = useState("Intermediate Range End");
    const [expertStart, setExpertStart] = useState("Expert Range Start");
    const [expertEnd, setExpertEnd] = useState("Expert Range End");
    const [easyRangeEndData, setEasyRangeEndData] = useState();
    const [intermediateStartData, setIntermediateStartData] = useState();
    const [intermediateEndData, setIntermediateEndData] = useState();
    const [expertStartData, setExpertStartData] = useState();
    const [expertEndData, setExpertEndData] = useState()

    const handleBack = () => {
        navigation('/quizSettings')
    }
    useEffect(() => {
        const tempArr = [];
        if (DropDownData) {
            DropDownData?.map((item) => {
                if (item?.value > easyStart) {
                    tempArr?.push(item)
                }
            })
        }
        setEasyRangeEndData(tempArr)
    }, [easyStart])

    useEffect(() => {
        const intermediateStartArr = [];
        if (easyRangeEndData) {
            easyRangeEndData?.map((item) => {
                if (item?.value > easyEnd) {
                    intermediateStartArr.push(item)
                }
            })
        }
        setIntermediateStartData(intermediateStartArr)
    }, [easyEnd])

    useEffect(() => {
        const intermediateEndArr = [];
        if (intermediateStartData) {
            intermediateStartData?.map((item) => {
                if (item?.value > intermediateStart) {
                    intermediateEndArr.push(item)
                }
            })
        }
        setIntermediateEndData(intermediateEndArr)
    }, [intermediateStart])

    useEffect(() => {
        const expertStartArr = [];
        if (intermediateEndData) {
            intermediateEndData?.map((item) => {
                if (item?.value > intermediateEnd) {
                    expertStartArr.push(item)
                }
            })
        }
        setExpertStartData(expertStartArr)
    }, [intermediateEnd])

    useEffect(() => {
        const expertEndArr = [];
        if (expertStartData) {
            expertStartData?.map((item) => {
                if (item?.value > expertStart) {
                    expertEndArr.push(item)
                }
            })
        }
        setExpertEndData(expertEndArr)
    }, [expertStart])

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Create Quiz Settings</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CDropdown>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {quizName}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setQuizName("Test")} >Test</CDropdownItem>
                                        <CDropdownItem onClick={() => setQuizName("Test")}>Test</CDropdownItem>
                                        <CDropdownItem onClick={() => setQuizName("Test")}>Test</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            <CFormLabel>Easy Range</CFormLabel>
                            <div className="mb-3">
                                <CDropdown>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {easyStart}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {DropDownData?.map((item) => {
                                            return (
                                                < CDropdownItem key={item?.id} onClick={() => setEasyStart(item?.value)} >{item?.value}</CDropdownItem>
                                            )
                                        })}
                                    </CDropdownMenu>
                                </CDropdown>
                                <CFormLabel style={{ marginLeft: 30 }}>To</CFormLabel>
                                <CDropdown style={{ marginLeft: 30, }} >
                                    <CDropdownToggle href="#" color="secondary">
                                        {easyEnd}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {easyRangeEndData?.map((item) => {
                                            return (
                                                < CDropdownItem key={item?.id} onClick={() => setEasyEnd(item?.value)} >{item?.value}</CDropdownItem>
                                            )
                                        })}
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            <CFormLabel>Intermediate Range</CFormLabel>
                            <div className="mb-3">
                                <CDropdown>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {intermediateStart}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {intermediateStartData?.map((item) => {
                                            return (
                                                < CDropdownItem key={item?.id} onClick={() => setIntermediateStart(item?.value)} >{item?.value}</CDropdownItem>
                                            )
                                        })}
                                    </CDropdownMenu>
                                </CDropdown>
                                <CFormLabel style={{ marginLeft: 30 }}>To</CFormLabel>
                                <CDropdown style={{ marginLeft: 30, }} >
                                    <CDropdownToggle href="#" color="secondary">
                                        {intermediateEnd}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {intermediateEndData?.map((item) => {
                                            return (
                                                < CDropdownItem key={item?.id} onClick={() => setIntermediateEnd(item?.value)} >{item?.value}</CDropdownItem>
                                            )
                                        })}
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            <CFormLabel>Expert Range</CFormLabel>
                            <div className="mb-3">
                                <CDropdown>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {expertStart}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {expertStartData?.map((item) => {
                                            return (
                                                < CDropdownItem key={item?.id} onClick={() => setExpertStart(item?.value)} >{item?.value}</CDropdownItem>
                                            )
                                        })}
                                    </CDropdownMenu>
                                </CDropdown>
                                <CFormLabel style={{ marginLeft: 30 }}>To</CFormLabel>
                                <CDropdown style={{ marginLeft: 30, }} >
                                    <CDropdownToggle href="#" color="secondary">
                                        {expertEnd}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {expertEndData?.map((item) => {
                                            return (
                                                < CDropdownItem key={item?.id} onClick={() => setExpertEnd(item?.value)} >{item?.value}</CDropdownItem>
                                            )
                                        })}
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button type="button" style={{ marginRight: 20 }} onClick={handleBack} class="btn btn-dark">Back</button>
                                <CButton type="submit" color="primary" >
                                    Submit
                                </CButton>
                            </div>

                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow >
    )
}

export default CreateQuizSettings
