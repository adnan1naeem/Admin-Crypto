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
    </CRow>
  )
}

export default WidgetsDropdown
