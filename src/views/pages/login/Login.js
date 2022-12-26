import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { isEmailValid } from 'src/constants/validation'
import RestApi from 'src/services/services'
import ReactLoading from "react-loading";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    if (!isEmailValid(email)) {
      alert("Invalid Email Format");
      setLoading(false)
      return;
    }
    const data = {
      email: email,
      password: password
    }
    RestApi.getInstance().post('auth/login', data)
      .then((res) => {
        setLoading(false)
        localStorage.setItem('token', res?.data?.data?.token)
        navigate("/dashboard")
      })
      .catch((err) => {
        setLoading(false)
        alert(err?.response?.data?.message)
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      {
                        loading ? (
                          <CButton color="primary" className="px-4" >
                            <div style={{ alignSelf: 'center' }}>
                              <ReactLoading type="spin" color="#ffffff"
                                height={30} width={30} />
                            </div>
                          </CButton>
                        ) : (
                          <CButton color="primary" className="px-4" onClick={handleLogin}>
                            Login
                          </CButton>
                        )
                      }
                    </CCol>
                    <CCol xs={6} className="text-right">
                      <Link to={"/forgotPassword"}>
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </Link>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
