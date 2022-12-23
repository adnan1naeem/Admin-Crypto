import React from 'react';
import {
    CCol,
    CRow,
} from '@coreui/react'

const CustomUserDataCard = (props) => {
    return (
        <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
            <CRow>
                <CCol style={{ marginLeft: 4 }}>
                    <small>{props.title}</small>
                </CCol>
                <CCol style={{ marginRight: 4, textAlign: 'right' }}>
                    <small>{props.description}</small>
                </CCol>
            </CRow>
        </div>
    )
}
export default CustomUserDataCard;