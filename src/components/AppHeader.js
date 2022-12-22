import React from 'react'
import {
  CContainer,
  CHeader,
} from '@coreui/react'

import { AppBreadcrumb } from './index'

const AppHeader = () => {

  const handleLogout = () => {
    localStorage.removeItem("token")
    location.reload()
  }

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <AppBreadcrumb />
        <div style={{ paddingRight: 10 }}>
          <button type="button" onClick={handleLogout} class="btn btn-ghost-dark">Logout</button>
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
