import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={{ paddingBottom: 20 }}
          className="mb-4"
          color="primary"
          value={
            <>
              26K <span className="fs-6 fw-normal"></span>
            </>
          }
          title="Total Players"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={{ paddingBottom: 20 }}
          className="mb-4"
          color="info"
          value={
            <>
              3.8K <span className="fs-6 fw-normal"></span>
            </>
          }
          title="Daily Quiz Taken Today"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={{ paddingBottom: 20 }}
          className="mb-4"
          color="secondary"
          value={
            <>
              44K <span className="fs-6 fw-normal"></span>
            </>
          }
          title="Pepper Spent Today By Players"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={{ paddingBottom: 20 }}
          className="mb-4"
          color="danger"
          value={
            <>
              2K <span className="fs-6 fw-normal"></span>
            </>
          }
          title="Active Players Today"
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={{ paddingBottom: 20 }}
          className="mb-4"
          color="warning"
          value={
            <>
              1.9K <span className="fs-6 fw-normal"></span>
            </>
          }
          title="Crypto Challenges Today"
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
