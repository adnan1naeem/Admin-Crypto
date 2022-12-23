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
import { useLocation, useNavigate } from 'react-router-dom';

const EditQuestions = () => {
    const data = useLocation();
    const navigation = useNavigate();
    const [questionText, setQuestionText] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [questionType, setQuestionType] = useState("Select Question Type");
    const [questionDifficulty, setQuestionDifficulty] = useState("Question Difficulty");
    const [answer, setAnswer] = useState("Select Answer");

    useEffect(() => {
        setQuestionText(data?.state?.item?.description);
        setOptionA(data?.state?.item?.optionA);
        setOptionB(data?.state?.item?.optionB);
        setOptionC(data?.state?.item?.optionC);
        setOptionD(data?.state?.item?.optionC);
    }, [])
    const handleBack = () => {
        navigation('/questions')
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Edit Question</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CDropdown>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {category}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setCategory("Test 1")} >Test 1</CDropdownItem>
                                        <CDropdownItem onClick={() => setCategory("Test 2")}>Test 2</CDropdownItem>
                                        <CDropdownItem onClick={() => setCategory("Test 3")}>Test 3</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CDropdown style={{ marginLeft: 30, }} >
                                    <CDropdownToggle href="#" color="secondary">
                                        {questionType}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setQuestionType("MC")} >MC</CDropdownItem>
                                        <CDropdownItem onClick={() => setQuestionType("T/F")}>T/F</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            <div className="mb-3">
                                <CFormLabel>Question Text</CFormLabel>
                                <CFormInput type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <CDropdown>
                                    <CDropdownToggle href="#" color="secondary" >
                                        {questionDifficulty}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem onClick={() => setQuestionDifficulty("Easy")} >Easy</CDropdownItem>
                                        <CDropdownItem onClick={() => setQuestionDifficulty("Medium")}>Medium</CDropdownItem>
                                        <CDropdownItem onClick={() => setQuestionDifficulty("High")}>High</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                            {
                                questionType === "T/F" ? (
                                    <>
                                        <div className="mb-3">
                                            <CFormLabel >Option A</CFormLabel>
                                            <CFormInput type="text" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <CFormLabel >Option B</CFormLabel>
                                            <CFormInput type="text" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-3">
                                            <CFormLabel>Option A</CFormLabel>
                                            <CFormInput type="text" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <CFormLabel >Option B</CFormLabel>
                                            <CFormInput type="text" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <CFormLabel >Option C</CFormLabel>
                                            <CFormInput type="text" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <CFormLabel>Option D</CFormLabel>
                                            <CFormInput type="text" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
                                        </div>
                                    </>
                                )
                            }
                            <div className="mb-3">
                                <CDropdown >
                                    <CDropdownToggle href="#" color="secondary" >
                                        {answer}
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        {
                                            questionType === "T/F" ? (
                                                <>
                                                    <CDropdownItem onClick={() => setAnswer("A")} >A</CDropdownItem>
                                                    <CDropdownItem onClick={() => setAnswer("B")}>B</CDropdownItem>
                                                </>
                                            ) : (
                                                <>
                                                    <CDropdownItem onClick={() => setAnswer("A")} >A</CDropdownItem>
                                                    <CDropdownItem onClick={() => setAnswer("B")}>B</CDropdownItem>
                                                    <CDropdownItem onClick={() => setAnswer("C")}>C</CDropdownItem>
                                                    <CDropdownItem onClick={() => setAnswer("D")}>D</CDropdownItem>
                                                </>
                                            )
                                        }
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
        </CRow>
    )
}

export default EditQuestions
