import React, { useState } from 'react'
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
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTable,
  CDropdownToggle,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CTableDataCell,
  CAvatar,
  CModal,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalTitle
} from '@coreui/react'
import { QuestionDummyData } from 'src/utils/QuestionDummyData';
import DeleteIcon from 'src/assets/images/bin.png'
import EditIcon from 'src/assets/images/edit.png'

const Breadcrumbs = () => {
  const [formView, setFormView] = useState(false);
  const [category, setCategory] = useState("Select Category");
  const [questionType, setQuestionType] = useState("Select Question Type");
  const [questionDifficulty, setQuestionDifficulty] = useState("Question Difficulty");
  const [answer, setAnswer] = useState("Select Answer");
  const [visible, setVisible] = useState(false)

  const [data, setData] = useState(QuestionDummyData)
  const [singleData, setSingleData] = useState()

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
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <>
            {
              formView ? (
                <>
                  <CCardHeader>
                    <strong>Add Question</strong>
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
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Question Text</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
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
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Option A</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Option B</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Option C</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Option D</CFormLabel>
                        <CFormInput type="text" id="exampleFormControlTextarea1" />
                      </div>
                      <div className="mb-3">
                        <CDropdown >
                          <CDropdownToggle href="#" color="secondary" >
                            {answer}
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem onClick={() => setAnswer("A")} >A</CDropdownItem>
                            <CDropdownItem onClick={() => setAnswer("B")}>B</CDropdownItem>
                            <CDropdownItem onClick={() => setAnswer("C")}>C</CDropdownItem>
                            <CDropdownItem onClick={() => setAnswer("D")}>D</CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <CButton type="submit" color="primary" onClick={() => setFormView(false)}>
                          Submit
                        </CButton>
                      </div>

                    </CForm>
                  </CCardBody>
                </>
              ) : (
                <>
                  <div style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }}>
                    <CButton type="submit" color="primary" onClick={() => setFormView(true)}>
                      Add Question
                    </CButton>
                  </div>
                  <CCardBody>
                    <br />
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
                            <CTableDataCell className="text-center" >
                              <CAvatar size="sm" src={DeleteIcon} shape="rounded-0" onClick={() => { setVisible(true), setSingleData(item) }} style={{ width: 20, height: 20 }} />
                              <CAvatar size="sm" src={EditIcon} shape="rounded-0" onClick={() => setFormView(true)} style={{ marginLeft: 5 }} />
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CCardBody>
                </>
              )
            }
          </>
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

export default Breadcrumbs
